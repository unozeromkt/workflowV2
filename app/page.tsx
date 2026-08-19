import Link from "next/link";
import { ArrowUpRight, Bot, Braces, CircleDollarSign, CloudCog, Cpu, DatabaseZap, Network, ScanSearch, ShoppingBag, Sparkles, UsersRound } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { industries, methodology, services, technologyNames } from "@/data/site";

const serviceIcons = [Bot, Braces, ShoppingBag, UsersRound, ScanSearch];
const problemIcons = [Network, CircleDollarSign, DatabaseZap];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="eyebrow">T R A N S F O R M A M O S &nbsp; V I D A S &nbsp; Y &nbsp; M O D E L O S &nbsp; D E &nbsp; N E G O C I O</p>
          <h1><span>WORKFLOW</span> INT.</h1>
          <h2>E S T R A T E G I A , &nbsp; T E C N O L O G Í A &nbsp; Y &nbsp; O P E R A C I Ó N &nbsp; I N T E L I G E N T E</h2>
          <p className="hero-lead">Diseñamos ecosistemas integrales para la automatización de procesos</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/servicios">Conoce nuestras soluciones <ArrowUpRight size={18} /></Link>
            <a className="button button-ghost" href="https://wa.me/573005243896">Hablar con un especialista <ArrowUpRight size={18} /></a>
          </div>
          <p className="site-url">W E A R E W O R K F L O W . C O M</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/og.png" alt="" />
        </div>
      </section>

      <section className="signal-strip" aria-label="Enfoque Workflow">
        <span>01</span><p>INTELIGENCIA ARTIFICIAL</p><span>02</span><p>SOFTWARE &amp; RPA</p><span>03</span><p>SMART BPO</p><span>04</span><p>CONSULTORÍA</p>
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
        <Reveal className="tech-heading"><CloudCog /><div><p className="section-kicker">EXPERIENCIA CERTIFICADA</p><h2>E S P E C I A L I S T A S E N L A T E C N O L O G Í A Q U E L I D E R A A L M U N D O</h2></div></Reveal>
        <div className="marquee"><div>{[...technologyNames, ...technologyNames].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}</div></div>
      </section>

      <FinalCTA />
    </main>
  );
}
