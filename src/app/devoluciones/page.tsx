import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  MessageCircle,
  Tag,
  Truck,
  CreditCard,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Devoluciones y cambios — MIAK",
  description:
    "Política de devoluciones y cambios. 30 días para cambios, 15 días para devoluciones con reembolso completo.",
};

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Contactanos",
    description:
      "Escribí a hola@miak.com.ar con tu número de orden y el motivo del cambio o devolución.",
  },
  {
    number: "2",
    icon: Tag,
    title: "Recibí tu etiqueta",
    description:
      "Te enviamos una etiqueta de envío prepaga para que no tengas ningún costo.",
  },
  {
    number: "3",
    icon: Truck,
    title: "Enviá el producto",
    description:
      "Empacá el producto en su embalaje original y despachalo con la etiqueta que te enviamos.",
  },
  {
    number: "4",
    icon: CreditCard,
    title: "Recibí tu reembolso",
    description:
      "Una vez recibido y verificado el producto, procesamos el reembolso en 5-10 días hábiles.",
  },
];

export default function DevolucionesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">
          Devoluciones y cambios
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">
        Devoluciones y cambios
      </h1>
      <p className="mt-2 text-neutral-600">
        Queremos que estés 100% conforme con tu compra. Si no lo estás, te lo
        hacemos fácil.
      </p>

      {/* Policy highlights */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 p-6">
          <p className="text-3xl font-bold text-neutral-900">30 días</p>
          <p className="mt-1 text-sm font-medium text-neutral-700">
            para cambios
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Cambiá por otro tamaño, color o modelo sin costo adicional.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 p-6">
          <p className="text-3xl font-bold text-neutral-900">15 días</p>
          <p className="mt-1 text-sm font-medium text-neutral-700">
            para devoluciones
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Si no te convence, devolvé el producto y te reembolsamos el total.
          </p>
        </div>
      </div>

      {/* Requirements */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
        Condiciones
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-neutral-600">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
          El producto debe estar sin uso, con todas las etiquetas originales.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
          Debe incluirse el embalaje original en buen estado.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
          Es necesario presentar el comprobante de compra (email de confirmación
          o factura).
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
          El plazo se cuenta desde la fecha de recepción del producto.
        </li>
      </ul>

      {/* Step by step */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
        ¿Cómo funciona?
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
              {step.number}
            </div>
            <div>
              <h3 className="font-medium text-neutral-900">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Exceptions */}
      <div className="mt-14 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div>
            <h3 className="font-medium text-amber-900">Excepciones</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-amber-800">
              <li>
                • Productos personalizados o grabados no admiten devolución.
              </li>
              <li>
                • Artículos adquiridos en ofertas finales (marcados como
                &quot;venta final&quot;) no son reembolsables.
              </li>
              <li>
                • Productos con señales de uso o sin etiquetas no serán
                aceptados.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Refund info */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
        Tiempos de reembolso
      </h2>
      <div className="mt-4 rounded-xl border border-neutral-200 p-6 text-sm text-neutral-600">
        <p>
          Una vez que recibimos el producto y verificamos que cumple las
          condiciones, procesamos el reembolso en{" "}
          <strong className="text-neutral-900">5-10 días hábiles</strong>. El
          reembolso se acredita por el mismo medio de pago utilizado en la
          compra.
        </p>
        <p className="mt-3">
          Para cambios, el nuevo producto se despacha dentro de las 48 hs
          posteriores a la recepción del original.
        </p>
      </div>

      <div className="mt-8 text-sm text-neutral-500">
        <p>
          ¿Tenés dudas?{" "}
          <Link
            href="/contacto"
            className="font-medium text-neutral-900 underline"
          >
            Contactanos
          </Link>{" "}
          y te ayudamos.
        </p>
      </div>
    </div>
  );
}
