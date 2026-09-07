import type { Metadata } from "next";
import { BadgeDollarSign, Bolt, Building2, Car, CodeXml, Dumbbell, Factory, GraduationCap, HandHeart, HardHat, HeartPulse, Landmark, Plane, ShoppingCart, Store } from "lucide-react";
import { ClientLogo } from "@/components/ClientLogo";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/data/site";
import { industryImageStyle } from "@/components/IndustryVisual";
import type { Client } from "@/data/site";

export const metadata: Metadata = { title: "Workflow International | Soluciones integrales con IA", description: "EXPERIENCIA WORKFLOW · INDUSTRIAS IMPLEMENTADAS" };
const icons = [HeartPulse, HandHeart, Landmark, Plane, GraduationCap, Dumbbell, Bolt, HardHat, Building2, Car, ShoppingCart, Store, BadgeDollarSign, CodeXml, Factory];

function IndustryClientCarousel({ clients, label }: { clients: Client[]; label: string }) {
  const copies = clients.length > 2 ? [0, 1] : [0];
  return (
    <div className="industry-clients" aria-label={label}>
      <div className={copies.length > 1 ? "industry-clients-track" : "industry-clients-track is-static"}>
        {copies.map((copy) => (
          <div className="industry-clients-group" aria-hidden={copy === 1} key={copy}>
            {clients.map((item) => <ClientLogo client={item} compact decorative={copy === 1} key={`${copy}-${item.name}`} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main>
      <PageHero title="INDUSTRIAS IMPLEMENTADAS" />
      <section className="section industry-grid">
        {industries.map((industry, index) => {
          const Icon = icons[index];
          return (
            <Reveal className="industry-card" key={industry.title} tabIndex={0}>
              <div className="industry-card-image" style={industryImageStyle(index)} />
              <div className="industry-card-body"><Icon /><h2>{industry.title}</h2><p>{industry.text}</p></div>
              {industry.clients.length > 0 && (
                <IndustryClientCarousel clients={industry.clients} label={`Clientes relacionados con ${industry.title}`} />
              )}
            </Reveal>
          );
        })}
      </section>
      <FinalCTA />
    </main>
  );
}
