import type { Metadata } from "next";
import { Cpu, Gauge, ShieldCheck, UsersRound } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "WE ARE", description: "WE ARE" };

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="NOSOTROS" title="WE ARE" />
      <section className="section about-page">
        <Reveal className="editorial-copy">
          <span className="editorial-number">01</span>
          <p>Somos una compañía dedicada a potencializar la productividad e impulsar la transformación tecnológica de los modelos de negocio. Nuestro objetivo principal es liberar el máximo potencial de los equipos de trabajo, dejando que la Inteligencia Artificial asuma la carga operativa, mientras el talento humano aporta el criterio estratégico que marca la diferencia.</p>
          <p>Digitalizamos y optimizamos flujos de trabajo en áreas específicas o transversalmente en las organizaciones, entendiendo sus necesidades y apartir de nuestra experiencia interdisciplinar acompañamos las empresas a adoptar soluciones tecnológicas especializadas que den solución a sus problematicas.</p>
        </Reveal>
      </section>
      <section className="dark-section vision-section">
        <Reveal className="vision-heading"><p className="section-kicker">VISIÓN</p><h2>HUMAN IN THE LOOP</h2><p>Modelo operativo donde la IA procesa, aprende y escala tareas repetitivas, mientras el talento humano valida, toma decisiones críticas y garantiza la calidad del servicio.</p></Reveal>
        <div className="vision-flow">
          <Reveal className="vision-node"><Cpu /><span>IA</span><p>procesa, aprende y escala tareas repetitivas</p></Reveal>
          <div className="flow-line" />
          <Reveal className="vision-node vision-node-main"><UsersRound /><span>TALENTO HUMANO</span><p>valida, toma decisiones críticas y garantiza la calidad del servicio.</p></Reveal>
        </div>
        <Reveal className="impact-panel">
          <div><Gauge /><span>IMPACTO DIRECTO</span></div>
          <p>Reducción de gastos operativos (OPEX) y estandarización total de la calidad en cada interacción con el cliente.</p>
          <div><ShieldCheck /><p>Implementamos soluciones a la medida para cada modelo de negocio.</p></div>
        </Reveal>
      </section>
      <FinalCTA />
    </main>
  );
}
