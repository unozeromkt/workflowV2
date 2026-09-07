import type { CSSProperties } from "react";
import type { Client } from "@/data/site";

export function ClientLogo({ client, compact = false, decorative = false }: { client: Client; compact?: boolean; decorative?: boolean }) {
  const classes = ["client-logo", compact && "client-logo-compact", client.focus && `client-logo-focus-${client.focus}`, client.surface && `client-logo-surface-${client.surface}`].filter(Boolean).join(" ");

  return (
    <span className={classes} style={{ "--client-logo-width": `${client.width}px`, "--client-logo-scale": client.scale ?? 1 } as CSSProperties}>
      <span className="client-logo-art"><img src={client.logo} alt={decorative ? "" : client.name} loading="lazy" /></span>
      <span className="client-logo-name" aria-hidden="true">{client.name}</span>
    </span>
  );
}
