import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Download, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Prensa — MIAK",
  description:
    "MIAK en los medios. Kit de prensa y contacto para periodistas y colaboradores.",
};

const pressMentions = [
  {
    publication: "Infobae Tendencias",
    quote:
      "MIAK se posiciona como la alternativa argentina al equipaje premium importado, con precios accesibles y diseño propio.",
    date: "Septiembre 2026",
  },
  {
    publication: "Revista Apertura",
    quote:
      "La marca apuesta a materiales reciclados y producción local en un mercado dominado por la importación.",
    date: "Agosto 2026",
  },
  {
    publication: "TN Viajes",
    quote:
      "El carry-on Aerolux ya es uno de los favoritos de los viajeros frecuentes argentinos por su peso y resistencia.",
    date: "Julio 2026",
  },
  {
    publication: "Forbes Argentina",
    quote:
      "Entre las 10 marcas argentinas de e-commerce con mayor crecimiento en el primer semestre de 2026.",
    date: "Junio 2026",
  },
];

export default function PrensaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Prensa</span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">MIAK en los medios</h1>
      <p className="mt-2 text-neutral-600">
        Lo que dicen de nosotros y recursos para periodistas.
      </p>

      {/* Press mentions */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {pressMentions.map((m) => (
          <div
            key={m.publication}
            className="flex flex-col justify-between rounded-xl border border-neutral-200 p-6"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                {m.publication}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 italic">
                &ldquo;{m.quote}&rdquo;
              </p>
            </div>
            <p className="mt-4 text-xs text-neutral-400">{m.date}</p>
          </div>
        ))}
      </div>

      {/* Press kit */}
      <div className="mt-14 rounded-xl border border-neutral-200 p-8 text-center">
        <Download className="mx-auto h-8 w-8 text-neutral-400" />
        <h2 className="mt-4 text-lg font-semibold text-neutral-900">
          Kit de prensa
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Logos, fotos de producto en alta resolución y datos de la marca.
        </p>
        <button
          disabled
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-500"
        >
          <Download className="h-4 w-4" />
          Próximamente
        </button>
      </div>

      {/* Contact */}
      <div className="mt-10 rounded-xl bg-neutral-50 p-8 text-center">
        <Mail className="mx-auto h-6 w-6 text-neutral-500" />
        <h2 className="mt-3 text-lg font-semibold text-neutral-900">
          Contacto de prensa
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Para consultas de prensa, entrevistas y colaboraciones:
        </p>
        <a
          href="mailto:prensa@miak.com.ar"
          className="mt-2 inline-block text-sm font-medium text-neutral-900 underline"
        >
          prensa@miak.com.ar
        </a>
      </div>
    </div>
  );
}
