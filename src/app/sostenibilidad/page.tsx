import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Leaf, Recycle, Package, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Sostenibilidad — MIAK",
  description:
    "Nuestro compromiso con materiales reciclados, packaging biodegradable y huella de carbono reducida.",
};

const stats = [
  {
    icon: Recycle,
    value: "40%",
    label: "Materiales reciclados",
    description: "en nuestra línea de mochilas y bolsos",
  },
  {
    icon: Package,
    value: "100%",
    label: "Packaging biodegradable",
    description: "sin plásticos de un solo uso",
  },
  {
    icon: Leaf,
    value: "–30%",
    label: "Huella de carbono",
    description: "vs. promedio de la industria",
  },
  {
    icon: Target,
    value: "2027",
    label: "Carbono neutral",
    description: "nuestro objetivo a mediano plazo",
  },
];

export default function SostenibilidadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Sostenibilidad</span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">Sostenibilidad</h1>
      <p className="mt-2 text-neutral-600">
        Creemos que viajar bien no debería costarle al planeta. Por eso
        trabajamos para reducir nuestro impacto en cada etapa.
      </p>

      {/* Stats grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-neutral-200 p-6"
          >
            <s.icon className="h-6 w-6 text-green-700" />
            <p className="mt-3 text-3xl font-bold text-neutral-900">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-neutral-700">
              {s.label}
            </p>
            <p className="mt-1 text-xs text-neutral-500">{s.description}</p>
          </div>
        ))}
      </div>

      {/* Content sections */}
      <div className="mt-14 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Materiales responsables
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            Nuestra línea de mochilas y bolsos utiliza telas fabricadas con
            poliéster reciclado de botellas PET. Cada mochila equivale a
            aproximadamente 12 botellas plásticas recuperadas. Los forros
            interiores son de nylon reciclado y los cierres provienen de
            proveedores certificados por estándares ambientales internacionales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Packaging sin plástico
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            Eliminamos el plástico de un solo uso de nuestro packaging. Las
            maletas se envían en fundas de tela reutilizable y las cajas son de
            cartón reciclado con tintas a base de agua. Las etiquetas están
            impresas en papel certificado FSC.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Compensación de carbono
          </h2>
          <p className="mt-3 leading-relaxed text-neutral-600">
            Compensamos las emisiones de cada envío a través de proyectos de
            reforestación en el norte argentino. Estamos trabajando para reducir
            las emisiones directas de nuestra cadena de producción con el
            objetivo de ser carbono neutral para 2027.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Metas 2027
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-600">
            <li className="flex items-start gap-2">
              <Target className="mt-1 h-4 w-4 shrink-0 text-green-700" />
              50% de materiales reciclados en toda la línea de productos
            </li>
            <li className="flex items-start gap-2">
              <Target className="mt-1 h-4 w-4 shrink-0 text-green-700" />
              Carbono neutral en operaciones y logística
            </li>
            <li className="flex items-start gap-2">
              <Target className="mt-1 h-4 w-4 shrink-0 text-green-700" />
              Programa de reparación y segunda vida para productos usados
            </li>
            <li className="flex items-start gap-2">
              <Target className="mt-1 h-4 w-4 shrink-0 text-green-700" />
              Publicación de reporte anual de impacto ambiental
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
