import type { CSSProperties } from "react";
import type { Client } from "@/data/site";

export function ClientLogo({ client, compact = false, decorative = false }: { client: Client; compact?: boolean; decorative?: boolean }) {
  const classes = ["client-logo", compact && "client-logo-compact", client.focus && `client-logo-focus-${client.focus}`].filter(Boolean).join(" ");

  return (
    <span className={classes} style={{ "--client-logo-width": `${client.width}px` } as CSSProperties}>
      <img src={client.logo} alt={decorative ? "" : client.name} loading="lazy" />
    </span>
  );
}
