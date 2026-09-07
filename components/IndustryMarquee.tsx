import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/site";
import { industryImageStyle } from "@/components/IndustryVisual";

function IndustryCards({ copy }: { copy: number }) {
  return (
    <div className="industry-marquee-group" aria-hidden={copy === 1}>
      {industries.map((industry, index) => (
        <article className="industry-slide" key={`${copy}-${industry.title}`}>
          <div
            className="industry-slide-image"
            style={industryImageStyle(index)}
          />
          <div className="industry-slide-copy"><h3>{industry.title}</h3></div>
        </article>
      ))}
    </div>
  );
}

export function IndustryMarquee() {
  return (
    <section className="industry-marquee" aria-labelledby="industry-marquee-title">
      <div className="industry-marquee-heading">
        <div><p className="section-kicker">EXPERIENCIA WORKFLOW</p><h2 id="industry-marquee-title">INDUSTRIAS IMPLEMENTADAS</h2></div>
        <Link className="text-link" href="/experiencia">Ver experiencia <ArrowUpRight size={17} /></Link>
      </div>
      <div className="industry-marquee-window">
        <div className="industry-marquee-track"><IndustryCards copy={0} /><IndustryCards copy={1} /></div>
      </div>
    </section>
  );
}
