import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <p>TRANSFORMAMOS VIDAS Y MODELOS DE NEGOCIO</p>
      <h2>¿LISTOS PARA EL FUTURO?</h2>
      <Link className="button button-primary" href="/contacto">Contactar <ArrowUpRight size={18} /></Link>
    </section>
  );
}
