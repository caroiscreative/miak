"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Qué tamaño soporta la mayoría de las aerolíneas para cabina?",
    a: "La medida límite es 55 × 40 × 20 cm. Nuestras carry-on están certificadas en la aceptación por la mayoría de las aerolíneas locales e internacionales de viaje.",
  },
  {
    q: "¿Cómo elijo entre carry-on, mediana o grande?",
    a: "Carry-on: viajes de 1-3 días o cabina. Mediana: viajes de 4-7 días. Grande: viajes largos o para llevar mucho. Si tenés dudas, la guía de tamaños te ayuda a elegir.",
  },
  {
    q: "¿Las maletas son expandibles?",
    a: "Sí, la mayoría de nuestras maletas cuenta con un compartimiento expandible que suma hasta un 20% más de capacidad con solo abrir un cierre.",
  },
  {
    q: "¿Qué cubre la garantía?",
    a: "La garantía de 3 años cubre defectos de fabricación: cierres, ruedas, manijas y telas. No cubre desgaste normal ni daños por aerolíneas o mal uso.",
  },
  {
    q: "¿Puedo cambiar el color o el tamaño?",
    a: "Sí, tenés 30 días para cambiar color, tamaño o modelo. El cambio es sin costo y podés hacerlo desde tu cuenta o contactándonos por WhatsApp.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
            MESA DE AYUDA
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="pr-4 text-sm font-medium text-neutral-900">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  open === i
                    ? "grid-rows-[1fr] pb-5 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
