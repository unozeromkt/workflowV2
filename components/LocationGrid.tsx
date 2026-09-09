import { locations } from "@/data/site";

export function LocationGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "location-presence-layout location-presence-layout-compact" : "location-presence-layout"}>
      <div className="location-grid">
        {locations.map((location) => (
          <article className="location-card" key={`${location.city}-${location.country}`}>
            <span className="location-flag" aria-hidden="true">{location.flag}</span>
            <p><b>{location.city}</b><small>{location.country}</small></p>
          </article>
        ))}
      </div>
      <div className="location-visual" role="img" aria-label="Equipo internacional de Workflow colaborando entre Colombia, Argentina, Ecuador, España, Estados Unidos, Perú, El Salvador y Alemania">
        <div className="location-visual-copy">
          <strong>Visión global.<br />Ejecución local.</strong>
        </div>
      </div>
    </div>
  );
}
