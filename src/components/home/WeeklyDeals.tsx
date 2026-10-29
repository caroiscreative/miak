"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/mock-data";

function formatPrice(n: number) {
  return "$" + n.toLocaleString("es-AR");
}

export default function WeeklyDeals() {
  const deals = products.filter((p) => p.compareAtPrice).slice(0, 4);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
              OFERTAS DE LA SEMANA
            </p>
            <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
              Ofertas de la semana
            </h2>
          </div>
          <Link
            href="/ofertas"
            className="hidden text-sm font-medium text-blue-600 underline underline-offset-4 transition hover:text-blue-700 md:block"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((product) => (
            <Link
              key={product.id}
              href={`/producto/${product.slug}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={product.images[0]?.url ?? ""}
                  alt={product.images[0]?.alt ?? product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {product.compareAtPrice && (
                  <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {Math.round(
                      (1 - product.price / product.compareAtPrice) * 100
                    )}
                    % OFF
                  </span>
                )}
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-medium text-neutral-900 group-hover:underline">
                  {product.name}
                </h3>
                <p className="mt-0.5 text-xs text-neutral-500">
                  {product.category}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm font-bold text-neutral-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-xs text-neutral-400 line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                  )}
                </div>
                <div className="mt-2 flex gap-1.5">
                  <span className="h-3 w-3 rounded-full border border-neutral-300 bg-neutral-900" />
                  <span className="h-3 w-3 rounded-full border border-neutral-300 bg-neutral-400" />
                  <span className="h-3 w-3 rounded-full border border-neutral-300 bg-blue-900" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/ofertas"
          className="mt-8 block text-center text-sm font-medium text-blue-600 underline underline-offset-4 md:hidden"
        >
          Ver todas →
        </Link>
      </div>
    </section>
  );
}
