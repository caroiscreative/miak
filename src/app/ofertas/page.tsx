import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/mock-data";
import ProductCard from "@/components/product/ProductCard";

export const metadata: Metadata = {
  title: "Ofertas — MIAK",
  description:
    "Las mejores ofertas en equipaje premium. Descuentos en valijas, mochilas y accesorios de viaje.",
};

export default function OfertasPage() {
  const deals = products.filter((p) => p.compareAtPrice);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Ofertas</span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">Ofertas</h1>
      <p className="mt-2 text-neutral-600">
        Aprovechá los mejores precios en equipaje premium.
      </p>

      {deals.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-lg font-medium text-neutral-900">
            No hay ofertas activas
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Suscribite al newsletter para enterarte primero cuando haya nuevas
            ofertas.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Ver catálogo
          </Link>
        </div>
      )}
    </div>
  );
}
