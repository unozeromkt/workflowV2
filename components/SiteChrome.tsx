"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { services } from "@/data/site";

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios", services: true },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/metodologia", label: "Metodología" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="WORKFLOW INT. — Inicio" onClick={() => setOpen(false)}>
        <img className="brand-logo" src="/workflow-mark.png" alt="" />
      </Link>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
        {links.map((link) => link.services ? (
          <div className="nav-services" key={link.href}>
            <Link className={pathname.startsWith(link.href) ? "active" : ""} href={link.href} onClick={() => setOpen(false)}>
              {link.label}<ChevronDown size={14} />
            </Link>
            <div className="mega-menu">
              <p>ENFOQUE WORKFLOW</p>
              <div>
                {services.map((service) => (
                  <Link key={service.slug} href={`/servicios/${service.slug}`} onClick={() => setOpen(false)}>
                    <span>{service.number}</span>{service.title}<ArrowUpRight size={15} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Link key={link.href} className={pathname === link.href ? "active" : ""} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
        ))}
        <Link className="mobile-contact" href="/contacto" onClick={() => setOpen(false)}>Contacto <ArrowUpRight size={16} /></Link>
      </nav>
      <Link className="bitrix-partner" href="/contacto" aria-label="Bitrix24 Certified Gold Partner — Contacto">
        <img src="/bitrix24-gold-partner.png" alt="Bitrix24" />
        <span>Certified Gold Partner</span>
      </Link>
      <button className="menu-toggle" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="brand footer-brand" aria-label="WORKFLOW INT. — Inicio"><img className="brand-logo" src="/workflow-mark.png" alt="" /><span>WORKFLOW <b>INT.</b></span></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-contact"><span className="footer-label">CONTACTO</span><a href="https://wa.me/573005243896">+57 300 524 38 96</a><p>Hablemos de estrategia, tecnología y operación inteligente.</p></div>
        <nav className="footer-sitemap" aria-label="Mapa del sitio">
          <span className="footer-label">MAPA DEL SITIO</span>
          <div className="footer-links">
            <Link href="/nosotros">Nosotros</Link><Link href="/servicios">Servicios</Link><Link href="/experiencia">Experiencia</Link><Link href="/metodologia">Metodología</Link><Link href="/contacto">Contacto</Link>
          </div>
          <div className="footer-service-links">
            {services.map((service) => <Link key={service.slug} href={`/servicios/${service.slug}`}>{service.title}</Link>)}
          </div>
        </nav>
      </div>
    </footer>
  );
}

export function WhatsAppCTA() {
  return <a className="whatsapp-float" href="https://wa.me/573005243896" aria-label="Hablar con un especialista por WhatsApp"><MessageCircle size={22} /><span>Hablar con un especialista</span></a>;
}
