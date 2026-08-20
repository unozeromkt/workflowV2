"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Building2, MessageCircle, UserRound } from "lucide-react";

const WHATSAPP_NUMBER = "573005243896";

export function WhatsAppContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const requirement = String(form.get("requirement") ?? "").trim();

    if (!name || !company || !requirement) return;

    const message = `Hola Workflow, mi nombre es ${name} de la empresa ${company} y quiero ayuda para ${requirement}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="whatsapp-form" onSubmit={handleSubmit}>
      <div className="whatsapp-form-heading">
        <span>01 / PRIMER CONTACTO</span>
        <h2>Armemos el punto de partida.</h2>
      </div>

      <div className="form-field">
        <label htmlFor="contact-name">Nombre</label>
        <div className="form-input-wrap"><UserRound aria-hidden="true" /><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Tu nombre" required /></div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-company">Empresa</label>
        <div className="form-input-wrap"><Building2 aria-hidden="true" /><input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Nombre de tu empresa" required /></div>
      </div>

      <div className="form-field form-field-message">
        <label htmlFor="contact-requirement">Requerimiento</label>
        <textarea id="contact-requirement" name="requirement" rows={5} maxLength={600} placeholder="Cuéntanos qué proceso, reto u oportunidad quieres transformar" required />
      </div>

      <button className="whatsapp-submit" type="submit">
        <MessageCircle aria-hidden="true" />
        <span>Enviar por WhatsApp</span>
        <ArrowUpRight aria-hidden="true" />
      </button>
      <p className="form-note">Al continuar se abrirá WhatsApp con tu mensaje listo para enviar.</p>
    </form>
  );
}
