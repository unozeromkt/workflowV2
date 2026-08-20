import Link from "next/link";
import { ArrowUpRight, BrainCircuit, ChartNoAxesCombined, CircleDollarSign, CloudCog, Compass, Cpu, Headset, ShoppingCart, Sparkles, Unplug, Workflow } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroLottie } from "@/components/HeroLottie";
import { Reveal } from "@/components/Reveal";
import { industries, methodology, services, technologyNames } from "@/data/site";

const serviceIcons = [BrainCircuit, Workflow, ShoppingCart, Headset, Compass];
const problemIcons = [Unplug, CircleDollarSign, ChartNoAxesCombined];
const clients = [
  { name: "902", sheet: "/clients/fadesa.png", column: 1, row: "low" },
  { name: "Fadesa", sheet: "/clients/fadesa.png", column: 2, row: "low" },
  { name: "Maxibienes", sheet: "/clients/fadesa.png", column: 3, row: "low" },
  { name: "Auros", sheet: "/clients/fadesa.png", column: 4, row: "low" },
  { name: "Grupo UMA", sheet: "/clients/cajamag.png", column: 1, row: "high" },
  { name: "Cajamag", sheet: "/clients/cajamag.png", column: 2, row: "high" },
  { name: "Tecnosoluciones", sheet: "/clients/cajamag.png", column: 3, row: "high" },
  { name: "Fundación Universitaria María Cano", sheet: "/clients/cajamag.png", column: 4, row: "high" },
  { name: "Reditos", sheet: "/clients/amfora.png", column: 1, row: "low" },
  { name: "Greater Medellín Convention & Visitors Bureau", sheet: "/clients/amfora.png", column: 2, row: "low" },
  { name: "South Desk", sheet: "/clients/amfora.png", column: 3, row: "low" },
  { name: "Amfora Packaging", sheet: "/clients/amfora.png", column: 4, row: "low" },
  { name: "Universidad Autónoma de Manizales", sheet: "/clients/uam.png", column: 1, row: "low" },
  { name: "Comfacundi", sheet: "/clients/uam.png", column: 2, row: "low" },
  { name: "Con Suerte", sheet: "/clients/uam.png", column: 3, row: "low" },
  { name: "Fundación organizacional", sheet: "/clients/uam.png", column: 4, row: "low" },
  { name: "EPM", sheet: "/clients/sena.png", column: 1, row: "high" },
  { name: "Alcaldía de Medellín", sheet: "/clients/sena.png", column: 2, row: "high" },
  { name: "GAC", sheet: "/clients/sena.png", column: 3, row: "high" },
  { name: "SENA", sheet: "/clients/sena.png", column: 4, row: "high" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="eyebrow">TRANSFORMAMOS VIDAS Y MODELOS DE NEGOCIO</p>
          <h1><span>Estrategia,</span> Tecnología y operación inteligente</h1>
          <p className="hero-lead">Diseñamos ecosistemas integrales para la automatización de procesos</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/servicios">Conoce nuestras soluciones <ArrowUpRight size={18} /></Link>
            <a className="button button-ghost" href="https://wa.me/573005243896">Hablar con un especialista <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <HeroLottie />
      </section>

      <section className="signal-strip" aria-label="Enfoque Workflow">
        <div className="signal-strip-inner">
          {[
            ["01", "INTELIGENCIA ARTIFICIAL", "/servicios/inteligencia-artificial"],
            ["02", "SOFTWARE & RPA", "/servicios/crm-software-rpa"],
            ["03", "SMART BPO", "/servicios/smart-bpo"],
            ["04", "CONSULTORÍA", "/servicios/consultoria-interdisciplinar"],
          ].map(([number, title, href]) => (
            <Link className="signal-service" href={href} key={number}>
              <span>{number}</span><p>{title}</p><ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="client-marquee" aria-labelledby="client-marquee-title">
        <div className="client-marquee-heading">
          <span>TRAYECTORIA</span>
          <h2 id="client-marquee-title">Organizaciones que confían en Workflow</h2>
        </div>
        <div className="client-marquee-window">
          <div className="client-marquee-track">
            {[0, 1].map((copy) => (
              <div className="client-marquee-group" aria-hidden={copy === 1} key={copy}>
                {clients.map((client) => (
                  <span className={`client-logo client-logo-${client.column} client-logo-${client.row}`} key={`${copy}-${client.name}`}>
                    <img src={client.sheet} alt={copy === 0 ? client.name : ""} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gap-section">
        <Reveal className="gap-layout">
          <div className="section-intro">
            <p className="section-kicker">LA BRECHA TECNOLÓGICA</p>
            <h2>EL COSTO DE LA FALSA DIGITALIZACIÓN</h2>
            <p className="section-copy">Las empresas malgastan casi la mitad de su jornada intentando coordinar herramientas desconectadas y corrigiendo tareas repetitivas.</p>
          </div>
          <div className="stat-panel"><strong>40%</strong><span>DE TIEMPO PERDIDO</span></div>
        </Reveal>
        <div className="problem-grid">
          {[
            ["Herramientas aisladas:", 'Recursos tecnologicos usados como "islas" , duplicando el trabajo sin generar un impacto positivo real.'],
            ["Fugas de capital:", "La falta de integralidad mantiene la dependencia en procesos manuales propensos al error."],
            ["Decisiones a ciegas:", "Datos fragmentados que impiden aprovechar el análisis predictivo para la toma asertiva de decisiones."],
          ].map(([title, text], index) => {
            const Icon = problemIcons[index];
            return <Reveal className="problem-card" key={title}><Icon /><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>;
          })}
        </div>
        <Reveal className="statement"><Sparkles /><p>Tener Inteligencia Artificial en tu compañía no garantiza eficiencia, el adoptar herramientas sin estrategia solo digitaliza el caos operativo.</p></Reveal>
      </section>

      <section className="dark-section about-section">
        <Reveal className="about-layout">
          <div className="big-word" aria-hidden="true">WE<br />ARE</div>
          <div className="about-copy">
            <p className="section-kicker">WE ARE</p>
            <p>Somos una compañía dedicada a potencializar la productividad e impulsar la transformación tecnológica de los modelos de negocio. Nuestro objetivo principal es liberar el máximo potencial de los equipos de trabajo, dejando que la Inteligencia Artificial asuma la carga operativa, mientras el talento humano aporta el criterio estratégico que marca la diferencia.</p>
            <p>Digitalizamos y optimizamos flujos de trabajo en áreas específicas o transversalmente en las organizaciones, entendiendo sus necesidades y apartir de nuestra experiencia interdisciplinar acompañamos las empresas a adoptar soluciones tecnológicas especializadas que den solución a sus problematicas.</p>
            <Link className="text-link" href="/nosotros">Conocer más <ArrowUpRight size={17} /></Link>
          </div>
          <div className="human-loop">
            <Cpu />
            <span>VISIÓN</span>
            <h3>HUMAN IN THE LOOP</h3>
            <p>Modelo operativo donde la IA procesa, aprende y escala tareas repetitivas, mientras el talento humano valida, toma decisiones críticas y garantiza la calidad del servicio.</p>
            <b>IMPACTO DIRECTO</b>
            <p>Reducción de gastos operativos (OPEX) y estandarización total de la calidad en cada interacción con el cliente.</p>
          </div>
        </Reveal>
      </section>

      <section className="section services-section">
        <Reveal className="section-heading-row">
          <div><p className="section-kicker">SERVICIOS</p><h2>ENFOQUE WORKFLOW</h2></div>
          <p>Implementamos soluciones a la medida para cada modelo de negocio.</p>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Reveal className={`service-card service-card-${index + 1}`} key={service.slug}>
                <Link href={`/servicios/${service.slug}`}>
                  <span className="card-number">{service.number}</span><Icon />
                  <h3>{service.title}</h3><ArrowUpRight className="card-arrow" />
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Link className="text-link dark-link" href="/servicios">Ver servicios <ArrowUpRight size={17} /></Link>
      </section>

      <section className="industry-band">
        <Reveal>
          <p className="section-kicker">EXPERIENCIA WORKFLOW</p>
          <h2>INDUSTRIAS IMPLEMENTADAS</h2>
          <div className="industry-ticker">{industries.map(({ title }) => <span key={title}>{title}</span>)}</div>
          <Link className="text-link" href="/experiencia">Ver experiencia <ArrowUpRight size={17} /></Link>
        </Reveal>
      </section>

      <section className="section methodology-section">
        <Reveal className="center-heading"><p className="section-kicker">METODOLOGÍA</p><h2>METODOLOGÍA WORKFLOW</h2></Reveal>
        <div className="method-grid">
          {methodology.map((step, index) => <Reveal className="method-card" key={step.phase}><span>{step.phase}</span><b>0{index + 1}</b><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}
        </div>
        <Link className="text-link dark-link method-link" href="/metodologia">Ver metodología <ArrowUpRight size={17} /></Link>
      </section>

      <section className="tech-section">
        <Reveal className="tech-heading"><CloudCog /><div><p className="section-kicker">EXPERIENCIA CERTIFICADA</p><h2>ESPECIALISTAS EN LA TECNOLOGÍA QUE LIDERA AL MUNDO</h2></div></Reveal>
        <div className="marquee"><div>{[...technologyNames, ...technologyNames].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}</div></div>
      </section>

      <FinalCTA />
    </main>
  );
}
