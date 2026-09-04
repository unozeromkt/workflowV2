import { locations } from "@/data/site";

export function LocationGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "location-grid location-grid-compact" : "location-grid"}>
      {locations.map((location, index) => (
        <article className="location-card" key={`${location.city}-${location.country}`}>
          <span className="location-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="location-flag" aria-hidden="true">{location.flag}</span>
          <p><b>{location.city}</b><small>{location.country}</small></p>
        </article>
      ))}
    </div>
  );
}
