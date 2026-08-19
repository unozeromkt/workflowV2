import type { Metadata } from "next";
import { Building2, GraduationCap, HeartPulse, Landmark, ShoppingCart, Wrench } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/data/site";

export const metadata: Metadata = { title: "Experiencia Workflow", description: "EXPERIENCIA WORKFLOW · INDUSTRIAS IMPLEMENTADAS" };
const icons = [HeartPulse, Building2, Landmark, ShoppingCart, GraduationCap, Wrench];

export default function ExperiencePage() {
  return (
    <main>
      <PageHero eyebrow="EXPERIENCIA WORKFLOW" title="INDUSTRIAS IMPLEMENTADAS" />
      <section className="section industry-grid">
        {industries.map((industry, index) => {
          const Icon = icons[index % icons.length];
          return <Reveal className="industry-card" key={industry.title}><span>{String(index + 1).padStart(2, "0")}</span><Icon /><h2>{industry.title}</h2><p>{industry.text}</p></Reveal>;
        })}
      </section>
      <FinalCTA />
    </main>
  );
}
