import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Dot } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  const title = service.heroLines?.join(" ") ?? service.title;
  return {
    title,
    description: title,
    openGraph: { title, description: title, images: [] },
    twitter: { title, description: title, images: [] },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <main>
      <PageHero eyebrow={service.number} title={service.heroLines?.join(" · ") ?? service.title} service />
      <nav className="section-nav" aria-label="Secciones del servicio">
        {service.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}><span>0{index + 1}</span>{section.title}</a>)}
      </nav>
      <div className="service-detail">
        {service.sections.map((section, index) => (
          <section className={index % 2 ? "service-block service-block-alt" : "service-block"} id={`section-${index + 1}`} key={section.title}>
            <Reveal className="service-block-heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{section.title}</h2>{section.subtitle && <h3>{section.subtitle}</h3>}{section.phrase && <p className="phrase">{section.phrase}</p>}{section.intro && <p>{section.intro}</p>}</div>
            </Reveal>
            <div className="feature-grid">
              {section.groups.map((group) => (
                <Reveal className="feature-card" key={group.title}>
                  <Dot className="feature-dot" /><h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
      <FinalCTA />
    </main>
  );
}
