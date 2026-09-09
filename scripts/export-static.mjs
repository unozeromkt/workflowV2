import { cp, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectDir = process.cwd();
const outputDir = resolve(projectDir, process.argv[2] ?? "outputs/godaddy");
const clientDir = join(projectDir, "dist/client");
const serverEntry = join(projectDir, "dist/server/index.js");

const serviceSlugs = [
  "inteligencia-artificial",
  "crm-software-rpa",
  "ai-websites-ecommerce",
  "smart-bpo",
  "consultoria-interdisciplinar",
];

const routes = [
  "/",
  "/nosotros",
  "/servicios",
  ...serviceSlugs.map((slug) => `/servicios/${slug}`),
  "/experiencia",
  "/contacto",
];

const redirects = new Map([["/metodologia", "/nosotros#metodologia"]]);

const staticNavigation = `<script data-static-export>document.addEventListener("click",function(event){var target=event.target;var link=target&&target.closest?target.closest("a[href]"):null;if(!link||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||link.target&&link.target!=="_self")return;var url=new URL(link.href,location.href);if(url.origin!==location.origin)return;if(url.pathname===location.pathname&&url.search===location.search&&url.hash)return;event.preventDefault();event.stopImmediatePropagation();location.assign(url.href);},true);</script>`;

const apacheConfig = `Options -MultiViews
DirectoryIndex index.html
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^(.+?)/?$ $1/index.html [L]
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(css|js|woff2|png|jpg|jpeg|svg|webp)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>
`;

const instructions = `ARCHIVOS ESTATICOS DE WORKFLOW INTERNATIONAL

1. Ingresa al Administrador de archivos de GoDaddy/cPanel.
2. Abre la carpeta public_html del dominio.
3. Sube el contenido de este paquete, no la carpeta contenedora.
4. Conserva el archivo .htaccess incluido (puede estar oculto en el administrador).
5. Verifica Inicio, WE ARE, Servicios, Experiencia y Contacto.

El formulario de contacto abre WhatsApp y no necesita PHP ni base de datos.
Este paquete debe instalarse en la raiz del dominio. Si se instala en una subcarpeta,
las rutas absolutas de recursos deben adaptarse antes de publicarlo.
`;

async function ensureFile(filePath) {
  const details = await stat(filePath);
  if (!details.isFile()) throw new Error(`No es un archivo: ${filePath}`);
}

await ensureFile(serverEntry);
await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const workerUrl = pathToFileURL(serverEntry);
workerUrl.searchParams.set("static-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };

async function render(pathname, expectedStatus = 200) {
  const response = await worker.fetch(
    new Request(`https://www.weareworkflow.com${pathname}`, { headers: { accept: "text/html" } }),
    env,
    ctx,
  );
  if (response.status !== expectedStatus) {
    throw new Error(`${pathname} devolvio ${response.status}; se esperaba ${expectedStatus}`);
  }
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.startsWith("text/html")) throw new Error(`${pathname} no devolvio HTML`);
  return (await response.text()).replace("</head>", `${staticNavigation}</head>`);
}

for (const route of routes) {
  const html = await render(route);
  const destination = route === "/" ? join(outputDir, "index.html") : join(outputDir, route.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

for (const [route, destination] of redirects) {
  const html = `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${destination}"><link rel="canonical" href="${destination}"><title>Redirigiendo…</title></head><body><p><a href="${destination}">Continuar a la metodología Workflow</a></p><script>location.replace(${JSON.stringify(destination)});</script></body></html>`;
  const target = join(outputDir, route.slice(1), "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

await writeFile(join(outputDir, "404.html"), await render("/pagina-no-encontrada", 404));
await writeFile(join(outputDir, ".htaccess"), apacheConfig);
await writeFile(join(outputDir, "INSTRUCCIONES-GODADDY.txt"), instructions);

for (const route of routes) {
  const htmlFile = route === "/" ? join(outputDir, "index.html") : join(outputDir, route.slice(1), "index.html");
  const html = await readFile(htmlFile, "utf8");
  if (!html.includes("data-static-export")) throw new Error(`Falta navegacion estatica en ${route}`);
  if (!html.includes("/_next/static/")) throw new Error(`Faltan recursos compilados en ${route}`);
}

console.log(`Exportacion estatica lista en ${outputDir}`);
console.log(`${routes.length} paginas, ${redirects.size} redireccion y pagina 404 generadas.`);
