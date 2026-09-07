import assert from "node:assert/strict";
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
  assert.match(html, /clients\/2026\/grupo-sura\.png/);
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

  const crm = await htmlFor("/servicios/crm-software-rpa");
  assert.match(crm, /service-bitrix-badge/);
  assert.match(crm, /Bitrix24 Certified Gold Partner/);
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
  assert.match(html, /Diseñemos una estrategia para tu negocio/);
  assert.match(html, /location-flag/);
  assert.match(html, /contact-country-chips/);
  assert.match(html, /Estrategia global, acompañamiento cercano/);
  assert.match(html, /mailto:info@workflowteams\.com/);
  assert.match(html, /info@workflowteams\.com/);
  assert.doesNotMatch(html, /WEAREWORKFLOW\.COM/);
});
