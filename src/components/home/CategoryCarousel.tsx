"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Carry-on", slug: "carry-on", seed: "miak-carryon" },
  { name: "Medianas", slug: "medianas", seed: "miak-medianas" },
  { name: "Grandes", slug: "grandes", seed: "miak-grandes" },
  { name: "Mochilas", slug: "mochilas", seed: "miak-mochilas" },
  { name: "Bolsos", slug: "bolsos", seed: "miak-bolsos" },
  { name: "Organizadores", slug: "organizadores", seed: "miak-organizadores" },
  { name: "Set de viaje", slug: "set-de-viaje", seed: "miak-set" },
  { name: "Accesorios", slug: "accesorios", seed: "miak-accesorios" },
  { name: "Ofertas", slug: "ofertas", seed: "miak-ofertas" },
];

export default function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 240;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
              CUENTA TU HISTORIA
            </p>
            <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
              Equipaje para cada forma de viajar
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Cada momento, ocasión, del viaje o modo de moverse
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-100"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="-mx-2 flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="group flex shrink-0 flex-col items-center gap-3"
            >
              <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-transparent transition group-hover:border-neutral-900 md:h-28 md:w-28">
                <Image
                  src={`https://picsum.photos/seed/${cat.seed}/200/200`}
                  alt={cat.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
