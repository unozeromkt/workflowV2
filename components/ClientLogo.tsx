import type { CSSProperties } from "react";
import type { Client } from "@/data/site";

export function ClientLogo({ client, compact = false, decorative = false }: { client: Client; compact?: boolean; decorative?: boolean }) {
  const classes = ["client-logo", compact && "client-logo-compact", client.focus && `client-logo-focus-${client.focus}`, client.enhance && "client-logo-enhance"].filter(Boolean).join(" ");

  return (
    <span className={classes} style={{ "--client-logo-width": `${client.width}px` } as CSSProperties}>
      <span className="client-logo-art"><img src={client.logo} alt={decorative ? "" : client.name} loading="lazy" /></span>
      <span className="client-logo-name" aria-hidden="true">{client.name}</span>
    </span>
  );
}
