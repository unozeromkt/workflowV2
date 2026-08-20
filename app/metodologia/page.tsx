import type { Metadata } from "next";
import { DraftingCompass, Gauge, Rocket, ScanSearch } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { methodology } from "@/data/site";

export const metadata: Metadata = { title: "Metodología Workflow", description: "METODOLOGÍA WORKFLOW" };
const icons = [ScanSearch, DraftingCompass, Rocket, Gauge];

export default function MethodologyPage() {
  return (
    <main>
      <PageHero title="METODOLOGÍA WORKFLOW" />
      <section className="section process-page">
        <div className="process-line" aria-hidden="true" />
        {methodology.map((step, index) => {
          const Icon = icons[index];
          return (
            <Reveal className="process-step" key={step.phase}>
              <div className="process-icon"><Icon /></div>
              <span>{step.phase}</span><strong>0{index + 1}</strong><h2>{step.title}</h2><p>{step.text}</p>
            </Reveal>
          );
        })}
      </section>
      <FinalCTA />
    </main>
  );
}
