"use client";

import { useState } from "react";
import { ShoppingBag, Heart, Minus, Plus, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product, ProductVariant } from "@/lib/types";

export default function AddToCartButton({
  product,
  selectedVariant,
}: {
  product: Product;
  selectedVariant?: ProductVariant;
}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedVariant);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-md border border-neutral-300">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-2.5 text-neutral-600 hover:text-neutral-900 transition"
            aria-label="Reducir cantidad"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-sm font-medium tabular-nums">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-2.5 text-neutral-600 hover:text-neutral-900 transition"
            aria-label="Aumentar cantidad"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <span className="text-sm text-neutral-500">
          {product.inStock ? "En stock" : "Sin stock"}
        </span>
      </div>

      <button
        onClick={handleAdd}
        disabled={!product.inStock || added}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-60"
      >
        {added ? (
          <>
            <Check className="h-5 w-5" />
            Agregado al carrito
          </>
        ) : (
          <>
            <ShoppingBag className="h-5 w-5" />
            Agregar al carrito
          </>
        )}
      </button>

      <button className="flex w-full items-center justify-center gap-2 rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50">
        <Heart className="h-4 w-4" />
        Agregar a favoritos
      </button>
    </div>
  );
}
