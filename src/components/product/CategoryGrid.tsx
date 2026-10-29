"use client";

import { useSearchParams } from "next/navigation";
import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function CategoryGrid({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const orden = searchParams.get("orden") ?? "relevancia";

  const sorted = [...products].sort((a, b) => {
    switch (orden) {
      case "precio-asc":
        return a.price - b.price;
      case "precio-desc":
        return b.price - a.price;
      case "nuevos":
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  if (sorted.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-neutral-500">No hay productos en esta categoría todavía.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sorted.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
