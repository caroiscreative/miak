import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Gem, Compass, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestra historia — MIAK",
  description:
    "MIAK nació de la pasión por viajar liviano. Diseñamos equipaje duradero, funcional y con estilo desde Buenos Aires.",
};

const values = [
  {
    icon: Gem,
    title: "Durabilidad",
    description:
      "Cada producto está pensado para resistir años de viajes. Usamos materiales de primera calidad y procesos de fabricación rigurosos.",
  },
  {
    icon: Compass,
    title: "Diseño con propósito",
    description:
      "Nada es decorativo. Cada bolsillo, cierre y compartimento tiene una razón funcional. Diseñamos para viajeros reales.",
  },
  {
    icon: HeartHandshake,
    title: "Servicio real",
    description:
      "Garantía de 3 años, atención en español y envío a todo el país. No desaparecemos después de la venta.",
  },
];

export default function SobreMiakPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-neutral-900 px-4 py-20 text-center text-white sm:py-28">
        <nav className="mx-auto mb-8 flex max-w-4xl items-center justify-center gap-1.5 text-sm text-neutral-400">
          <Link href="/" className="transition hover:text-white">
            Inicio
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white">Nuestra historia</span>
        </nav>
        <h1 className="text-4xl font-bold sm:text-5xl">Nuestra historia</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-300">
          Equipaje pensado por viajeros, para viajeros.
        </p>
      </div>

      {/* Story */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6 text-neutral-600 leading-relaxed">
          <p>
            MIAK nació en Buenos Aires de una frustración simple: no había
            equipaje que combinara ligereza, resistencia y buen diseño a un
            precio justo. Después de años de viajar con valijas que se rompían,
            mochilas incómodas y bolsos que pesaban más vacíos que llenos,
            decidimos crear algo mejor.
          </p>
          <p>
            Desde el primer carry-on hasta las colecciones que ves hoy, cada
            producto pasa por un proceso de diseño obsesivo. Probamos prototipos
            en aeropuertos, colectivos, subtes y rutas de montaña. Si algo no
            funciona en la vida real, no sale a la venta.
          </p>
          <p>
            Creemos que el equipaje no debería ser un problema — debería ser
            parte de la aventura. Por eso diseñamos productos livianos que
            duran, con garantía real y servicio en tu idioma.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-neutral-900">
            Lo que nos mueve
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <v.icon className="h-6 w-6 text-neutral-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team placeholder */}
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="flex h-64 items-center justify-center rounded-2xl bg-neutral-100">
          <p className="text-sm text-neutral-500">
            Foto del equipo · Próximamente
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-neutral-900 px-4 py-16 text-center text-white">
        <h2 className="text-2xl font-bold">
          Conocé nuestros productos
        </h2>
        <p className="mx-auto mt-2 max-w-md text-neutral-300">
          Equipaje diseñado en Argentina para viajeros de todo el mundo.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}
