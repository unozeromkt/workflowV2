import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PageHero({ eyebrow, title, subtitle, service = false }: { eyebrow?: string; title: string; subtitle?: string; service?: boolean }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-hero-content">
        {service && <Link className="breadcrumb" href="/servicios"><ArrowLeft size={15} /> Servicios</Link>}
        {eyebrow && <p className="section-kicker">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="page-hero-index" aria-hidden="true" />
    </section>
  );
}
