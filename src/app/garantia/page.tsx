import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle,
  XCircle,
  Camera,
  Wrench,
  ArrowRightLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Garantía — MIAK",
  description:
    "3 años de garantía limitada en todos nuestros productos. Cubrimos defectos de fabricación en cierres, ruedas, manijas y telas.",
};

const covered = [
  "Defectos de fabricación en costuras y uniones",
  "Fallas en cierres y cremalleras",
  "Problemas con ruedas y sistema de rodamiento",
  "Roturas en manijas telescópicas y fijas",
  "Defectos en el material de la tela o carcasa",
  "Fallas en el sistema de cierre de seguridad",
];

const notCovered = [
  "Desgaste normal por uso prolongado",
  "Daño causado por aerolíneas o transporte",
  "Modificaciones o reparaciones no autorizadas",
  "Daño por mal uso o sobrecarga",
  "Daño cosmético (rayaduras, manchas)",
  "Accesorios consumibles (candados, etiquetas)",
];

export default function GarantiaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Garantía</span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">
        Garantía de 3 años
      </h1>
      <p className="mt-2 text-neutral-600">
        Todos los productos MIAK están respaldados por una garantía limitada de
        3 años contra defectos de fabricación.
      </p>

      {/* Coverage */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-green-900">
            <CheckCircle className="h-5 w-5" />
            Qué cubre
          </h2>
          <ul className="mt-4 space-y-2.5">
            {covered.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-green-800"
              >
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-red-900">
            <XCircle className="h-5 w-5" />
            Qué no cubre
          </h2>
          <ul className="mt-4 space-y-2.5">
            {notCovered.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-red-800"
              >
                <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How to claim */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
        Cómo hacer un reclamo
      </h2>
      <div className="mt-6 space-y-6">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
            <Camera className="h-5 w-5 text-neutral-700" />
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">
              1. Documentá el problema
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Sacá fotos claras del defecto desde distintos ángulos. Incluí una
              foto de la etiqueta del producto si es posible.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
            <CheckCircle className="h-5 w-5 text-neutral-700" />
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">
              2. Enviá tu reclamo
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Escribí a{" "}
              <a
                href="mailto:garantia@miak.com.ar"
                className="font-medium underline"
              >
                garantia@miak.com.ar
              </a>{" "}
              con las fotos, tu comprobante de compra y una breve descripción del
              problema.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
            <Wrench className="h-5 w-5 text-neutral-700" />
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">
              3. Evaluación y resolución
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Nuestro equipo evalúa el caso en 2-3 días hábiles y te contacta
              con la resolución.
            </p>
          </div>
        </div>
      </div>

      {/* Repair vs Replace */}
      <div className="mt-14 rounded-xl border border-neutral-200 p-6">
        <div className="flex items-start gap-3">
          <ArrowRightLeft className="mt-0.5 h-5 w-5 shrink-0 text-neutral-700" />
          <div>
            <h3 className="font-medium text-neutral-900">
              Reparación o reemplazo
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Si el defecto es reparable, lo reparamos sin costo y te lo
              devolvemos. Si la reparación no es viable, reemplazamos el
              producto por uno nuevo del mismo modelo o uno equivalente. En ambos
              casos, MIAK cubre los costos de envío.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-neutral-500">
        <p>
          ¿Tenés preguntas sobre tu garantía?{" "}
          <Link
            href="/contacto"
            className="font-medium text-neutral-900 underline"
          >
            Contactanos
          </Link>
        </p>
      </div>
    </div>
  );
}
