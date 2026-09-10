import { readdir, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve, sep } from "node:path";
import sharp from "sharp";

const projectDir = process.cwd();
const publicDir = resolve(projectDir, "public");
const keepAsPng = new Set(["favicon.png", "apple-touch-icon.png"]);
const textRoots = ["app", "components", "data", "tests"];
const textExtensions = new Set([".css", ".js", ".mjs", ".ts", ".tsx"]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

const pngFiles = (await walk(publicDir)).filter((file) => extname(file).toLowerCase() === ".png");
const replacements = new Map();
let originalBytes = 0;
let optimizedBytes = 0;

for (const source of pngFiles) {
  const relativePath = relative(publicDir, source).split(sep).join("/");
  const sourceStats = await stat(source);
  originalBytes += sourceStats.size;

  if (keepAsPng.has(relativePath)) {
    const temporary = `${source}.optimized`;
    await sharp(source).png({ compressionLevel: 9, adaptiveFiltering: true, palette: true, quality: 100, effort: 10 }).toFile(temporary);
    const temporaryStats = await stat(temporary);
    if (temporaryStats.size < sourceStats.size) {
      await rename(temporary, source);
      optimizedBytes += temporaryStats.size;
    } else {
      await unlink(temporary);
      optimizedBytes += sourceStats.size;
    }
    continue;
  }

  const isSocialPreview = relativePath === "og.png";
  const isEditorial = relativePath.startsWith("editorial/") || relativePath.startsWith("industries/") || relativePath.startsWith("services/");
  const outputRelativePath = isSocialPreview ? "og.jpg" : relativePath.replace(/\.png$/i, ".webp");
  const output = join(publicDir, ...outputRelativePath.split("/"));
  let pipeline = sharp(source).rotate();

  if (isSocialPreview) {
    pipeline = pipeline.resize({ width: 1536, withoutEnlargement: true });
    await pipeline.jpeg({ quality: 84, progressive: true, mozjpeg: true }).toFile(output);
  } else if (isEditorial) {
    pipeline = pipeline.resize({ width: 1800, withoutEnlargement: true });
    await pipeline.webp({ quality: 82, alphaQuality: 95, smartSubsample: true, effort: 6 }).toFile(output);
  } else {
    const maxWidth = relativePath.startsWith("experience-logos/") || relativePath.startsWith("clients/") ? 640 : 1024;
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    await pipeline.webp({ quality: 90, alphaQuality: 100, nearLossless: true, effort: 6 }).toFile(output);
  }

  optimizedBytes += (await stat(output)).size;
  replacements.set(`/${relativePath}`, `/${outputRelativePath}`);
}

for (const root of textRoots) {
  for (const file of await walk(join(projectDir, root))) {
    if (!textExtensions.has(extname(file))) continue;
    const initial = await readFile(file, "utf8");
    let updated = initial;
    for (const [source, output] of replacements) updated = updated.replaceAll(source, output);
    if (updated !== initial) await writeFile(file, updated);
  }
}

for (const source of pngFiles) {
  const relativePath = relative(publicDir, source).split(sep).join("/");
  if (!keepAsPng.has(relativePath)) await unlink(source);
}

const savedBytes = originalBytes - optimizedBytes;
const savedPercent = originalBytes ? Math.round((savedBytes / originalBytes) * 100) : 0;
console.log(`Imagenes procesadas: ${pngFiles.length}`);
console.log(`Peso original: ${(originalBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Peso optimizado: ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`Reduccion: ${savedPercent}%`);
