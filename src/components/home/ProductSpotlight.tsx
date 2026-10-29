import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const features = [
  "Solo 2.3 kg · Policarbonato",
  "Cierre reforzado YKK",
  "Ruedas 360°",
  "Garantía 3 años",
];

export default function ProductSpotlight() {
  return (
    <section className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-neutral-900 px-6 py-16 text-white lg:px-16 lg:py-24">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-neutral-400">
            AHORA: AEROLUX PRO
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Aerolux: liviana
            <br />
            para llevar más.
          </h2>
          <p className="mt-4 max-w-md text-neutral-300">
            Diseñada para quienes viajan liviano sin resignar protección.
            Estructura de policarbonato con cierre hermético y expansión
            inteligente.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-neutral-200">{feat}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-6">
            <span className="text-3xl font-bold">$245.000</span>
            <Link
              href="/producto/aerolux-carry-on"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Conocer Aerolux
            </Link>
          </div>
        </div>
        <div className="relative min-h-[400px] bg-neutral-100 lg:min-h-0">
          <Image
            src="https://picsum.photos/seed/miak-aerolux/800/800"
            alt="Maleta Aerolux Carry-on"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
