import type { Client } from "@/data/site";

export function ClientLogo({ client, compact = false }: { client: Client; compact?: boolean }) {
  return (
    <span className={`client-logo client-logo-${client.column} client-logo-${client.row}${compact ? " client-logo-compact" : ""}`}>
      <img src={client.sheet} alt={client.name} />
    </span>
  );
}
