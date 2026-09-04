import type { Metadata } from "next";
import { ArrowUpRight, Globe2, MessageCircle } from "lucide-react";
import { LocationGrid } from "@/components/LocationGrid";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppContactForm } from "@/components/WhatsAppContactForm";

export const metadata: Metadata = { title: "Contacto", description: "¿LISTOS PARA EL FUTURO?" };

export default function ContactPage() {
  return (
    <main>
      <PageHero title="¿LISTOS PARA EL FUTURO?" />
      <section className="section contact-experience">
        <div className="contact-main">
          <Reveal className="contact-intro">
            <p className="section-kicker">HABLEMOS</p>
            <h2>Cuéntanos qué quieres transformar.</h2>
            <p>Comparte el reto de tu empresa. Organizaremos tus datos en un mensaje claro para iniciar la conversación directamente por WhatsApp.</p>
            <div className="contact-direct">
              <a href="https://wa.me/573005243896" target="_blank" rel="noreferrer"><MessageCircle /><span><small>WHATSAPP</small>+57 300 524 38 96</span><ArrowUpRight /></a>
              <a href="https://weareworkflow.com" target="_blank" rel="noreferrer"><Globe2 /><span><small>WEB</small>WEAREWORKFLOW.COM</span><ArrowUpRight /></a>
            </div>
          </Reveal>
          <WhatsAppContactForm />
        </div>
        <aside className="contact-presence">
          <Reveal className="contact-presence-heading">
            <p className="section-kicker">PRESENCIA INTERNACIONAL</p>
            <h2>Estrategia global, acompañamiento cercano.</h2>
          </Reveal>
          <LocationGrid />
        </aside>
      </section>
      <section className="contact-claim">TRANSFORMAMOS VIDAS Y MODELOS DE NEGOCIO</section>
    </main>
  );
}
