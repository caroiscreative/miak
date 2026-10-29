"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
          <Image
            src={product.images[0]?.url ?? ""}
            alt={product.images[0]?.alt ?? product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.compareAtPrice && (
            <span className="absolute left-3 top-3 rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white">
              -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
            </span>
          )}
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-xs text-neutral-500 capitalize">{product.category.replace(/-/g, " ")}</p>
          <h3 className="text-sm font-medium text-neutral-900 line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-neutral-900">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-xs text-neutral-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
          {product.variants && product.variants.length > 0 && (
            <div className="flex gap-1.5 pt-1">
              {product.variants.map((v) => (
                <span
                  key={v.id}
                  className="h-3.5 w-3.5 rounded-full border border-neutral-200"
                  style={{ backgroundColor: v.color ?? "#ccc" }}
                  title={v.name}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="absolute bottom-[88px] right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md opacity-0 transition group-hover:opacity-100 hover:bg-neutral-900 hover:text-white"
        aria-label={`Agregar ${product.name} al carrito`}
      >
        <ShoppingBag className="h-4 w-4" />
      </button>
    </div>
  );
}
