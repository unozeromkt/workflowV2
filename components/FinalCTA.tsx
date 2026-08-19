import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <p>T R A N S F O R M A M O S &nbsp; V I D A S &nbsp; Y &nbsp; M O D E L O S &nbsp; D E &nbsp; N E G O C I O</p>
      <h2>¿LISTOS PARA EL FUTURO?</h2>
      <Link className="button button-primary" href="/contacto">Contactar <ArrowUpRight size={18} /></Link>
    </section>
  );
}
