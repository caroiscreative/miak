"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";

const tabs = ["Descripción", "Especificaciones", "Envíos"] as const;

export default function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Descripción");

  return (
    <div>
      <div className="flex border-b border-neutral-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-3 text-sm font-medium transition ${
              active === tab
                ? "border-b-2 border-neutral-900 text-neutral-900"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="py-6 text-sm leading-relaxed text-neutral-600">
        {active === "Descripción" && (
          <div className="space-y-4">
            <p>{product.description}</p>
            <p>
              Cada producto MIAK está diseñado para acompañarte en todos tus viajes. Materiales
              premium, terminaciones cuidadas y la garantía de una marca que entiende lo que
              necesitás.
            </p>
          </div>
        )}
        {active === "Especificaciones" && (
          <div className="space-y-3">
            <div className="flex justify-between border-b border-neutral-100 py-2">
              <span className="text-neutral-500">Material</span>
              <span className="font-medium text-neutral-900">Policarbonato / Nylon balístico</span>
            </div>
            <div className="flex justify-between border-b border-neutral-100 py-2">
              <span className="text-neutral-500">Peso</span>
              <span className="font-medium text-neutral-900">2.8 kg</span>
            </div>
            <div className="flex justify-between border-b border-neutral-100 py-2">
              <span className="text-neutral-500">Dimensiones</span>
              <span className="font-medium text-neutral-900">55 × 40 × 20 cm</span>
            </div>
            <div className="flex justify-between border-b border-neutral-100 py-2">
              <span className="text-neutral-500">Capacidad</span>
              <span className="font-medium text-neutral-900">40 L</span>
            </div>
            <div className="flex justify-between border-b border-neutral-100 py-2">
              <span className="text-neutral-500">Garantía</span>
              <span className="font-medium text-neutral-900">3 años</span>
            </div>
          </div>
        )}
        {active === "Envíos" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-neutral-900">Envío a todo el país</h4>
              <p className="mt-1">
                Gratis en compras mayores a $150.000. Para montos menores, el costo es de $12.500.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900">Tiempos de entrega</h4>
              <p className="mt-1">
                CABA y GBA: 2-3 días hábiles. Interior: 4-7 días hábiles. Envío express disponible
                (consultar costo).
              </p>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900">Devoluciones</h4>
              <p className="mt-1">
                30 días para cambio o devolución sin costo. El producto debe estar en su empaque
                original.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
