import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — MIAK",
  description:
    "Consejos de viaje, guías de equipaje y novedades de MIAK.",
};

const placeholderArticles = [
  {
    title: "Guía definitiva: qué llevar en el carry-on",
    excerpt:
      "Todo lo que necesitás saber para empacar inteligente y no despachar equipaje nunca más.",
    image: "https://picsum.photos/seed/miak-blog-1/600/400",
  },
  {
    title: "5 destinos argentinos para escapadas cortas",
    excerpt:
      "Los mejores destinos para un fin de semana largo, con la mochila justa y sin complicaciones.",
    image: "https://picsum.photos/seed/miak-blog-2/600/400",
  },
  {
    title: "Cómo elegir el tamaño de maleta ideal",
    excerpt:
      "Carry-on, mediana o grande: una guía práctica según la duración y el tipo de viaje.",
    image: "https://picsum.photos/seed/miak-blog-3/600/400",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Blog</span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">Blog</h1>
      <p className="mt-2 text-neutral-600">
        Consejos de viaje, guías de equipaje y novedades.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {placeholderArticles.map((article) => (
          <div
            key={article.title}
            className="group overflow-hidden rounded-xl border border-neutral-200"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-neutral-900">
                  Próximamente
                </span>
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-neutral-900 line-clamp-2">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-500 line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-neutral-50 p-8 text-center">
        <p className="text-lg font-semibold text-neutral-900">
          El blog de MIAK llega pronto
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          Suscribite al newsletter para recibir los artículos apenas se
          publiquen.
        </p>
      </div>
    </div>
  );
}
