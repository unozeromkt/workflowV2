import type { Metadata } from "next";
import { ArrowUpRight, Globe2, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/data/site";

export const metadata: Metadata = { title: "Contacto", description: "¿LISTOS PARA EL FUTURO?" };

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="CONTACTO" title="¿LISTOS PARA EL FUTURO?" />
      <section className="section contact-layout">
        <Reveal className="contact-primary">
          <p className="section-kicker">WHATSAPP</p>
          <a href="https://wa.me/573005243896"><MessageCircle /><span>+57 300 524 38 96</span><ArrowUpRight /></a>
          <div><Globe2 /><p>W E A R E W O R K F L O W . C O M</p></div>
        </Reveal>
        <div className="location-grid">
          {locations.map((location, index) => <Reveal className="location-card" key={location}><span>{String(index + 1).padStart(2, "0")}</span><MapPin /><p>{location}</p></Reveal>)}
        </div>
      </section>
      <section className="contact-claim">T R A N S F O R M A M O S V I D A S Y M O D E L O S D E N E G O C I O</section>
    </main>
  );
}
