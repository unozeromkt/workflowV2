import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Compass, Headset, ShoppingCart, Workflow } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "ENFOQUE WORKFLOW", description: "ENFOQUE WORKFLOW" };
const icons = [BrainCircuit, Workflow, ShoppingCart, Headset, Compass];

export default function ServicesPage() {
  return (
    <main>
      <PageHero title="ENFOQUE WORKFLOW" />
      <section className="section services-index">
        {services.map((service, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={service.slug} className="service-row">
              <Link href={`/servicios/${service.slug}`}>
                <span className="service-row-number">{service.number}</span><Icon />
                <h2>{service.title}</h2><ArrowUpRight />
              </Link>
            </Reveal>
          );
        })}
      </section>
      <FinalCTA />
    </main>
  );
}
