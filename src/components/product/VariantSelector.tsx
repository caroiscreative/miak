"use client";

import type { ProductVariant } from "@/lib/types";

export default function VariantSelector({
  variants,
  selected,
  onSelect,
}: {
  variants: ProductVariant[];
  selected: ProductVariant | undefined;
  onSelect: (v: ProductVariant) => void;
}) {
  if (variants.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-neutral-700">
        Color: <span className="font-normal text-neutral-500">{selected?.name ?? "Seleccioná"}</span>
      </p>
      <div className="flex gap-2.5">
        {variants.map((v) => (
          <button
            key={v.id}
            onClick={() => onSelect(v)}
            disabled={!v.inStock}
            title={`${v.name}${v.inStock ? "" : " — Sin stock"}`}
            className={`relative h-8 w-8 rounded-full border-2 transition ${
              selected?.id === v.id
                ? "border-neutral-900 ring-2 ring-neutral-900/20"
                : "border-neutral-200 hover:border-neutral-400"
            } ${!v.inStock ? "opacity-40 cursor-not-allowed" : ""}`}
            style={{ backgroundColor: v.color ?? "#ccc" }}
          >
            {!v.inStock && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="block h-[1px] w-full rotate-45 bg-neutral-400" />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
