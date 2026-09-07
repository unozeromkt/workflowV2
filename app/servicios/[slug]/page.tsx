import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FeatureIcon } from "@/components/FeatureIcon";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

const serviceVisuals: Record<string, Array<{ src: string; size: string; position: string }>> = {
  "inteligencia-artificial": [
    { src: "/services/artificial-intelligence/sales-front-office.png", size: "cover", position: "center" },
    { src: "/services/artificial-intelligence/hr-tech.png", size: "cover", position: "center" },
    { src: "/services/artificial-intelligence/finance-legal.png", size: "cover", position: "center" },
    { src: "/services/artificial-intelligence/intelligent-workflows.png", size: "cover", position: "center" },
    { src: "/services/artificial-intelligence/field-iot.png", size: "cover", position: "center" },
    { src: "/services/artificial-intelligence/executive-analytics.png", size: "cover", position: "center" },
  ],
  "crm-software-rpa": [
    { src: "/editorial/methodology-phases.png", size: "400% auto", position: "33.333% center" },
    { src: "/industries/industries-11-15.png", size: "500% auto", position: "75% center" },
    { src: "/editorial/methodology-phases.png", size: "400% auto", position: "66.666% center" },
  ],
  "ai-websites-ecommerce": [
    { src: "/industries/industries-11-15.png", size: "500% auto", position: "0% center" },
    { src: "/industries/industries-11-15.png", size: "500% auto", position: "25% center" },
    { src: "/industries/industries-11-15.png", size: "500% auto", position: "75% center" },
  ],
  "smart-bpo": [{ src: "/industries/industries-01-05.png", size: "500% auto", position: "50% center" }],
  "consultoria-interdisciplinar": [
    { src: "/editorial/methodology-phases.png", size: "400% auto", position: "0% center" },
    { src: "/editorial/methodology-phases.png", size: "400% auto", position: "66.666% center" },
  ],
};

function visualStyle(slug: string, index: number): CSSProperties {
  const visuals = serviceVisuals[slug] ?? serviceVisuals["inteligencia-artificial"];
  const visual = visuals[index % visuals.length];
  return { backgroundImage: `url(${visual.src})`, backgroundSize: visual.size, backgroundPosition: visual.position };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  if (slug === "inteligencia-artificial") {
    const title = "Workflow International | Soluciones integrales con IA";
    return {
      title: { absolute: title },
      description: "Soluciones integrales con IA para potenciar tu empresa.",
      openGraph: { title, description: "Soluciones integrales con IA para potenciar tu empresa.", images: [] },
      twitter: { title, description: "Soluciones integrales con IA para potenciar tu empresa.", images: [] },
    };
  }
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
      <PageHero title={service.heroLines?.join(" · ") ?? service.title} service />
      <nav className="section-nav" aria-label="Secciones del servicio">
        {service.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{section.title}</a>)}
      </nav>
      <div className="service-detail">
        {service.sections.map((section, index) => (
          <section className={index % 2 ? "service-block service-block-alt" : "service-block"} id={`section-${index + 1}`} key={section.title}>
            <div className="service-section-lead">
              <Reveal className="service-block-heading">
                {service.slug === "crm-software-rpa" && index === 0 && (
                  <a className="service-bitrix-badge" href="https://www.bitrix24.co/partners/?ID=11605791" target="_blank" rel="noreferrer" aria-label="Ver perfil Gold Partner de Workflow en Bitrix24">
                    <img src="/bitrix24-certified-gold-partner.png" alt="Bitrix24 Certified Gold Partner" />
                  </a>
                )}
                <h2>{section.title}</h2>{section.subtitle && <h3>{section.subtitle}</h3>}{section.phrase && <p className="phrase">{section.phrase}</p>}{section.intro && <p>{section.intro}</p>}
                <Link className="service-inline-cta" href="/contacto">Hablemos de esta solución <ArrowUpRight size={17} /></Link>
              </Reveal>
              <Reveal className="service-visual"><div style={visualStyle(service.slug, index)} role="img" aria-label={`Imagen de apoyo para ${section.title}`} /></Reveal>
            </div>
            <div className="feature-grid">
              {section.groups.map((group) => (
                <Reveal className="feature-card" key={group.title}>
                  <FeatureIcon title={group.title} /><h3>{group.title}</h3>
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
