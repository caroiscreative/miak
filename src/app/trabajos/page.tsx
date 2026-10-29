import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Clock,
  Tag,
  Briefcase,
  Laptop,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trabajá con nosotros — MIAK",
  description:
    "Unite al equipo de MIAK. Buscamos personas apasionadas por el diseño, los viajes y el e-commerce.",
};

const positions = [
  {
    title: "Diseñador/a de Producto",
    location: "CABA",
    type: "Full-time",
    description:
      "Buscamos un/a diseñador/a industrial para trabajar en el desarrollo de nuevas líneas de equipaje. Experiencia en diseño de productos físicos, materiales y procesos de fabricación.",
  },
  {
    title: "Community Manager",
    location: "Remoto",
    type: "Full-time",
    description:
      "Gestión de redes sociales, creación de contenido y comunidad de viajeros. Experiencia en Instagram, TikTok y estrategia de contenidos para e-commerce.",
  },
  {
    title: "Ejecutivo/a de Ventas",
    location: "CABA",
    type: "Full-time",
    description:
      "Desarrollo de canal B2B: corporativos, agencias de viaje y tiendas multimarca. Experiencia en ventas consultivas y negociación.",
  },
];

const benefits = [
  {
    icon: Tag,
    title: "Descuentos en productos",
    description: "40% de descuento en toda la línea MIAK para vos y tu familia.",
  },
  {
    icon: Laptop,
    title: "Trabajo flexible",
    description:
      "Esquema híbrido con posibilidad de trabajo remoto según el rol.",
  },
  {
    icon: Users,
    title: "Equipo joven",
    description:
      "Cultura horizontal, sin burocracia. Tomamos decisiones rápido.",
  },
];

export default function TrabajosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">
          Trabajá con nosotros
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">Unite al equipo</h1>
      <p className="mt-2 text-neutral-600">
        Estamos construyendo la marca de equipaje más querida de Argentina.
        Buscamos personas con ganas de hacer las cosas bien.
      </p>

      {/* Open positions */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
        Posiciones abiertas
      </h2>
      <div className="mt-6 space-y-4">
        {positions.map((pos) => (
          <div
            key={pos.title}
            className="rounded-xl border border-neutral-200 p-6 transition hover:border-neutral-400"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {pos.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-neutral-500">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {pos.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {pos.type}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {pos.description}
                </p>
              </div>
              <a
                href={`mailto:rrhh@miak.com.ar?subject=Aplicación: ${pos.title}`}
                className="shrink-0 rounded-lg bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Aplicar
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <h2 className="mt-14 text-xl font-semibold text-neutral-900">
        Beneficios
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-xl border border-neutral-200 p-6 text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
              <b.icon className="h-5 w-5 text-neutral-700" />
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900">{b.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{b.description}</p>
          </div>
        ))}
      </div>

      {/* General contact */}
      <div className="mt-14 rounded-xl bg-neutral-50 p-8 text-center">
        <Briefcase className="mx-auto h-6 w-6 text-neutral-500" />
        <p className="mt-3 text-sm text-neutral-600">
          ¿No ves una posición que te encaje? Mandanos tu CV a{" "}
          <a
            href="mailto:rrhh@miak.com.ar"
            className="font-medium text-neutral-900 underline"
          >
            rrhh@miak.com.ar
          </a>{" "}
          y te contactamos si surge algo.
        </p>
      </div>
    </div>
  );
}
