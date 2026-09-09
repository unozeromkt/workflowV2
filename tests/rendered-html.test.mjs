import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("server-renders the updated home experience", async () => {
  const html = await htmlFor("/");
  assert.match(html, /<title>Workflow International \| Soluciones integrales con IA<\/title>/);
  assert.match(html, />WE ARE<\/a>/);
  assert.match(html, />Contacto<\/a>/);
  assert.match(html, /Algunas organizaciones que confían en Workflow/);
  assert.match(html, /clients\/2026\/epm\.png/);
  assert.match(html, /clients\/2026\/comfacundi\.png/);
  assert.match(html, /--client-logo-scale:0\.62/);
  assert.match(html, /clients\/2026\/auros\.png/);
  assert.match(html, /clients\/2026\/uam\.svg/);
  assert.doesNotMatch(html, /clients\/fadesa\.png/);
  assert.match(html, /INDUSTRIAS IMPLEMENTADAS/);
  assert.match(html, /industries-01-05\.png/);
  assert.match(html, /Soluciones integrales <span>con IA<\/span> para potenciar tu empresa/);
  const hero = html.match(/<section class="hero">([\s\S]*?)<\/section>/)?.[1] ?? "";
  assert.doesNotMatch(hero, /TRANSFORMAMOS VIDAS Y MODELOS DE NEGOCIO/);
  assert.doesNotMatch(html, /Atenea Multiservicios/);
  assert.match(html, /bitrix24\.co\/partners\/\?ID=11605791/);
  assert.match(html, /class="bitrix-logo"/);
  assert.match(html, /class="bitrix-gold-partner"/);
  assert.doesNotMatch(html, /Certified Gold Partner/);
  assert.doesNotMatch(html, /<section class="section methodology-section">/);
  assert.doesNotMatch(html, /class="card-number"/);

  const heroActions = html.match(/<div class="hero-actions">([\s\S]*?)<\/div>/)?.[1] ?? "";
  assert.doesNotMatch(heroActions, /Hablar con un especialista/);
});

test("integrates methodology and international presence into WE ARE", async () => {
  const html = await htmlFor("/nosotros");
  assert.match(html, /METODOLOGÍA WORKFLOW/);
  assert.match(html, /methodology-editorial-image/);
  assert.match(html, /we-are-team\.png/);
  assert.doesNotMatch(html, /editorial-number/);
  assert.match(html, /location-presence-layout/);
  assert.doesNotMatch(html, /contact-country-chips/);
  assert.match(html, /Medellín/);
  assert.match(html, /Buenos Aires/);
});

test("renders sector client logos and Bitrix partner proof", async () => {
  const experience = await htmlFor("/experiencia");
  assert.match(experience, /industry-clients/);
  assert.match(experience, /Cajamag/);
  assert.match(experience, /Alcaldía de Medellín/);
  assert.match(experience, /Alcaldía Mayor de Tunja/);
  assert.match(experience, /industry-card-image/);
  assert.match(experience, /industry-clients-track/);
  assert.match(experience, /industry-clients-group/);
  const experienceLogoPaths = [...experience.matchAll(/src="(\/experience-logos\/[a-z0-9/-]+\.png)"/g)].map((match) => match[1]);
  const uniqueExperienceLogoPaths = [...new Set(experienceLogoPaths)];
  assert.equal(uniqueExperienceLogoPaths.length, 71);
  for (const logoPath of uniqueExperienceLogoPaths) {
    assert.equal(existsSync(join(process.cwd(), "public", logoPath)), true, `Missing experience logo: ${logoPath}`);
  }
  assert.match(experience, /experience-logos\/cajas-compensacion\/01\.png/);
  assert.match(experience, /experience-logos\/educacion\/06\.png/);
  assert.match(experience, /experience-logos\/construccion\/05\.png/);
  assert.doesNotMatch(experience, /WEAREWORKFLOW_2026E/);
  assert.match(experience, /Viajes y Viajes/);
  assert.match(experience, /Root\+Co/);

  const crm = await htmlFor("/servicios/crm-software-rpa");
  assert.match(crm, /service-bitrix-badge/);
  assert.match(crm, /class="service-bitrix-logo"/);
  assert.match(crm, /class="service-bitrix-gold"/);
  assert.match(crm, /alt="Gold Partner"/);
  assert.match(crm, /bitrix24-gold-partner\.png/);
  assert.match(crm, /bitrix24-certified-gold-partner\.png/);
  assert.match(crm, /service-visual/);
  assert.doesNotMatch(crm, /<span>01<\/span>/);
  assert.match(crm, /bitrix24\.co\/partners\/\?ID=11605791/);

  const artificialIntelligence = await htmlFor("/servicios/inteligencia-artificial");
  for (const image of [
    "sales-front-office.png",
    "hr-tech.png",
    "finance-legal.png",
    "intelligent-workflows.png",
    "field-iot.png",
    "executive-analytics.png",
  ]) {
    assert.match(artificialIntelligence, new RegExp(image.replace(".", "\\.")));
  }
  assert.match(artificialIntelligence, /<title>Workflow International \| Soluciones integrales con IA<\/title>/);
});

test("renders the reorganized contact form and flag locations", async () => {
  const html = await htmlFor("/contacto");
  assert.match(html, /Transformemos tu negocio con IA especializada/);
  assert.match(html, /location-flag/);
  assert.match(html, /contact-country-chips/);
  assert.match(html, /Estrategia global, acompañamiento cercano/);
  assert.match(html, /mailto:info@weareworkflow\.com/);
  assert.match(html, /info@weareworkflow\.com/);
  assert.doesNotMatch(html, /01 \/ PRIMER CONTACTO/);
  assert.doesNotMatch(html, /UNA RED · OCHO CIUDADES/);
  assert.doesNotMatch(html, /WEAREWORKFLOW\.COM/);
});
