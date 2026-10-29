"use client";

import Link from "next/link";
import {
  ChevronRight,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@miak.com.ar",
    href: "mailto:hola@miak.com.ar",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 11 XXXX-XXXX",
    href: "https://wa.me/5411XXXXXXXX",
  },
  { icon: Clock, label: "Horario", value: "Lun-Vie 9:00-18:00 hs", href: null },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Palermo, CABA, Argentina",
    href: null,
  },
];

const subjects = [
  "Consulta general",
  "Estado de mi pedido",
  "Cambio o devolución",
  "Garantía",
  "Facturación",
  "Prensa y colaboraciones",
  "Otro",
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Contacto</span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">Contactanos</h1>
      <p className="mt-2 text-neutral-600">
        Estamos para ayudarte. Escribinos y te respondemos lo antes posible.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Send className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-green-900">
                ¡Mensaje enviado!
              </h2>
              <p className="mt-2 text-sm text-green-700">
                Te respondemos dentro de las próximas 24 hs hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Asunto
                </label>
                <select
                  id="subject"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                >
                  <option value="">Seleccioná un asunto</option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                <Send className="h-4 w-4" />
                Enviar mensaje
              </button>
            </form>
          )}
        </div>

        {/* Contact info sidebar */}
        <div className="space-y-4 lg:col-span-2">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-xl border border-neutral-200 p-4"
            >
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-0.5 text-sm font-medium text-neutral-900 underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm font-medium text-neutral-900">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Map placeholder */}
          <div className="flex h-48 items-center justify-center rounded-xl bg-neutral-100">
            <div className="text-center">
              <MapPin className="mx-auto h-6 w-6 text-neutral-400" />
              <p className="mt-2 text-sm text-neutral-500">
                Palermo, Buenos Aires
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
