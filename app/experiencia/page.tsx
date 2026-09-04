import type { Metadata } from "next";
import { BadgeDollarSign, Bolt, Building2, Car, CodeXml, Dumbbell, Factory, GraduationCap, HandHeart, HardHat, HeartPulse, Landmark, Plane, ShoppingCart, Store } from "lucide-react";
import { ClientLogo } from "@/components/ClientLogo";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/data/site";

export const metadata: Metadata = { title: "Experiencia Workflow", description: "EXPERIENCIA WORKFLOW · INDUSTRIAS IMPLEMENTADAS" };
const icons = [HeartPulse, HandHeart, Landmark, Plane, GraduationCap, Dumbbell, Bolt, HardHat, Building2, Car, ShoppingCart, Store, BadgeDollarSign, CodeXml, Factory];

export default function ExperiencePage() {
  return (
    <main>
      <PageHero title="INDUSTRIAS IMPLEMENTADAS" />
      <section className="section industry-grid">
        {industries.map((industry, index) => {
          const Icon = icons[index];
          return (
            <Reveal className="industry-card" key={industry.title} tabIndex={0}>
              <span>{String(index + 1).padStart(2, "0")}</span><Icon /><h2>{industry.title}</h2><p>{industry.text}</p>
              <div className="industry-clients" aria-label={`Clientes relacionados con ${industry.title}`}>
                {industry.clients.map((item) => <ClientLogo client={item} compact key={item.name} />)}
              </div>
            </Reveal>
          );
        })}
      </section>
      <FinalCTA />
    </main>
  );
}
