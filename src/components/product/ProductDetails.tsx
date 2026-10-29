"use client";

import { useState } from "react";
import { Star, Truck, RefreshCw, Shield } from "lucide-react";
import type { Product, ProductVariant } from "@/lib/types";
import AddToCartButton from "./AddToCartButton";
import VariantSelector from "./VariantSelector";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ProductDetails({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants?.[0]
  );

  const displayPrice = selectedVariant?.price ?? product.price;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
          {product.category.replace(/-/g, " ")}
        </p>
        <h1 className="mt-1 text-2xl font-bold text-neutral-900 sm:text-3xl">{product.name}</h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-neutral-200"}`}
            />
          ))}
        </div>
        <span className="text-sm text-neutral-500">4.8 (24 reseñas)</span>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-bold text-neutral-900">{formatPrice(displayPrice)}</span>
        {product.compareAtPrice && (
          <>
            <span className="text-lg text-neutral-400 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
              -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
            </span>
          </>
        )}
      </div>

      <p className="text-sm leading-relaxed text-neutral-600">{product.description}</p>

      {product.variants && product.variants.length > 0 && (
        <VariantSelector
          variants={product.variants}
          selected={selectedVariant}
          onSelect={setSelectedVariant}
        />
      )}

      <AddToCartButton product={product} selectedVariant={selectedVariant} />

      <div className="grid grid-cols-3 gap-3 border-t border-neutral-100 pt-6">
        <div className="flex flex-col items-center gap-1.5 text-center">
          <Truck className="h-5 w-5 text-neutral-400" />
          <span className="text-xs text-neutral-600">Envío gratis</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <RefreshCw className="h-5 w-5 text-neutral-400" />
          <span className="text-xs text-neutral-600">Cambios sin costo</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <Shield className="h-5 w-5 text-neutral-400" />
          <span className="text-xs text-neutral-600">Garantía 3 años</span>
        </div>
      </div>
    </div>
  );
}
