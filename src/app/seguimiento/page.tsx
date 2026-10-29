"use client";

import Link from "next/link";
import { ChevronRight, Search, Truck, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const shippingPartners = [
  { name: "Andreani", zone: "CABA y GBA", time: "24-72 hs hábiles" },
  { name: "OCA", zone: "Interior del país", time: "3-7 días hábiles" },
  {
    name: "Correo Argentino",
    zone: "Todo el país",
    time: "5-10 días hábiles",
  },
];

const shippingZones = [
  { zone: "CABA", time: "24-48 hs hábiles", icon: MapPin },
  { zone: "GBA", time: "48-72 hs hábiles", icon: MapPin },
  { zone: "Interior", time: "3-7 días hábiles", icon: Truck },
];

export default function SeguimientoPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Seguí tu envío</span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">Seguí tu envío</h1>
      <p className="mt-2 text-neutral-600">
        Ingresá tu número de orden y email para ver el estado de tu pedido.
      </p>

      {/* Tracking form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 rounded-xl border border-neutral-200 p-6 sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="order"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Número de orden
            </label>
            <input
              id="order"
              type="text"
              placeholder="Ej: MIAK-00123"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-neutral-700"
            >
              Email de la compra
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          <Search className="h-4 w-4" />
          Rastrear envío
        </button>
        {submitted && (
          <p className="mt-4 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
            Funcionalidad de rastreo próximamente. Por ahora, contactanos a{" "}
            <a
              href="mailto:hola@miak.com.ar"
              className="font-medium underline"
            >
              hola@miak.com.ar
            </a>{" "}
            con tu número de orden.
          </p>
        )}
      </form>

      {/* Shipping times */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
        Tiempos de entrega estimados
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {shippingZones.map((z) => (
          <div
            key={z.zone}
            className="flex items-start gap-3 rounded-xl border border-neutral-200 p-5"
          >
            <z.icon className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />
            <div>
              <p className="font-medium text-neutral-900">{z.zone}</p>
              <p className="mt-0.5 text-sm text-neutral-600">{z.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Partners */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
        Nuestros socios de envío
      </h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-5 py-3 text-left font-medium text-neutral-600">
                Transportista
              </th>
              <th className="px-5 py-3 text-left font-medium text-neutral-600">
                Zona
              </th>
              <th className="px-5 py-3 text-left font-medium text-neutral-600">
                Tiempo estimado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {shippingPartners.map((p) => (
              <tr key={p.name}>
                <td className="px-5 py-3 font-medium text-neutral-900">
                  {p.name}
                </td>
                <td className="px-5 py-3 text-neutral-600">{p.zone}</td>
                <td className="px-5 py-3 text-neutral-600">{p.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-lg bg-neutral-50 p-5 text-sm text-neutral-600">
        <p className="flex items-start gap-2">
          <Clock className="mt-0.5 h-4 w-4 shrink-0" />
          Los tiempos son estimados en días hábiles y pueden variar según la
          disponibilidad del transportista y la zona de entrega.
        </p>
      </div>
    </div>
  );
}
