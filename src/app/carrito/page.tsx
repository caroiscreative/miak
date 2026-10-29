"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ShoppingBag, Shield } from "lucide-react";
import { useCart } from "@/lib/cart-context";

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

const FREE_SHIPPING_THRESHOLD = 150000;
const SHIPPING_COST = 12500;

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();

  const shipping = total >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const orderTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
          <ShoppingBag className="h-10 w-10 text-neutral-400" />
        </div>
        <h1 className="mt-6 text-2xl font-bold text-neutral-900">Tu carrito está vacío</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Explorá nuestra colección y encontrá el equipaje perfecto para tu próximo viaje.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Seguir comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Tu carrito</h1>
      <p className="mt-1 text-sm text-neutral-500">
        {itemCount} {itemCount === 1 ? "producto" : "productos"}
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {items.map((item) => {
              const key = item.product.id + (item.variant?.id ?? "");
              return (
                <div key={key} className="flex gap-4 py-6 sm:gap-6">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-neutral-100 sm:h-32 sm:w-32">
                    <Image
                      src={item.product.images[0]?.url ?? ""}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <Link
                          href={`/producto/${item.product.slug}`}
                          className="text-sm font-medium text-neutral-900 hover:underline sm:text-base"
                        >
                          {item.product.name}
                        </Link>
                        {item.variant && (
                          <p className="mt-0.5 text-xs text-neutral-500">{item.variant.name}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.variant?.id)}
                        className="text-neutral-400 hover:text-neutral-600 transition"
                        aria-label={`Eliminar ${item.product.name}`}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-md border border-neutral-300">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1),
                              item.variant?.id
                            )
                          }
                          className="px-2.5 py-1.5 text-neutral-600 hover:text-neutral-900 transition"
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.variant?.id
                            )
                          }
                          className="px-2.5 py-1.5 text-neutral-600 hover:text-neutral-900 transition"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-neutral-900">
                        {formatPrice(
                          (item.variant?.price ?? item.product.price) * item.quantity
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-lg font-bold text-neutral-900">Resumen del pedido</h2>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium text-neutral-900">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Envío</span>
                <span className="font-medium text-neutral-900">
                  {shipping === 0 ? (
                    <span className="text-green-600">Gratis</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-neutral-500">
                  Envío gratis en compras mayores a {formatPrice(FREE_SHIPPING_THRESHOLD)}. Te
                  faltan {formatPrice(FREE_SHIPPING_THRESHOLD - total)}.
                </p>
              )}
              <div className="border-t border-neutral-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-base font-bold text-neutral-900">Total</span>
                  <span className="text-base font-bold text-neutral-900">
                    {formatPrice(orderTotal)}
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full rounded-md bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
              Finalizar compra
            </button>

            <Link
              href="/"
              className="mt-3 block text-center text-sm text-neutral-500 hover:text-neutral-700 transition"
            >
              ← Seguir comprando
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 border-t border-neutral-200 pt-4">
              <Shield className="h-4 w-4 text-neutral-400" />
              <span className="text-xs text-neutral-500">Pago seguro con MercadoPago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
