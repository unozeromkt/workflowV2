import { methodology } from "@/data/site";

export function MethodologyGrid() {
  return (
    <div className="methodology-editorial-grid">
      {methodology.map((step, index) => (
        <article className="methodology-editorial-card" key={step.phase}>
          <div className="methodology-editorial-image" style={{ backgroundPosition: `${index * (100 / 3)}% center` }} />
          <div className="methodology-editorial-copy"><span>{step.phase}</span><strong>0{index + 1}</strong><h3>{step.title}</h3><p>{step.text}</p></div>
        </article>
      ))}
    </div>
  );
}
