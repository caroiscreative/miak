"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/lib/mock-data";

const tabs = ["Carry-on", "Valijas", "Mochilas"];

function formatPrice(n: number) {
  return "$" + n.toLocaleString("es-AR");
}

export default function Recommendations() {
  const [activeTab, setActiveTab] = useState("Carry-on");
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabToCategory: Record<string, string> = {
    "Carry-on": "Carry-on",
    Valijas: "Valijas",
    Mochilas: "Mochilas",
  };

  const filtered = products.filter(
    (p) => p.category === tabToCategory[activeTab]
  );

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
            TAMBIÉN TE VA A GUSTAR
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
            También vas a amar
          </h2>
          <p className="mt-1 text-sm text-neutral-500">
            Organizadores y accesorios que hacen más fácil cada viaje.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-1 border-b border-neutral-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-200"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/producto/${product.slug}`}
              className="group w-56 shrink-0"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                <Image
                  src={product.images[0]?.url ?? ""}
                  alt={product.images[0]?.alt ?? product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-sm font-medium text-neutral-900 group-hover:underline">
                {product.name}
              </h3>
              <p className="mt-1 text-sm font-bold text-neutral-900">
                {formatPrice(product.price)}
              </p>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-sm text-neutral-500">
              No hay productos en esta categoría todavía.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
