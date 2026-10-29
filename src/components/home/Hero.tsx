"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <Image
        src="https://picsum.photos/seed/miak-hero/1440/600"
        alt="Viajero en aeropuerto con maleta MIAK"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
          PARA VIAJES LARGOS · CABINA · MOCHILAS
        </p>
        <h1 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Llegá más lejos con menos peso.
        </h1>
        <p className="mt-4 max-w-lg text-base text-white/90 md:text-lg">
          Maletas resistentes, casco liviano y cierre hermético — inteligentes para viajar con todo bajo control.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/categoria/mochilas"
            className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Conocer mochilas
          </Link>
          <Link
            href="/guia-tamanos"
            className="rounded-md border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Guía de tamaños
          </Link>
        </div>
        <p className="mt-8 text-xs text-white/70">
          ★ 4.9 · Más de 2,400 viajeros · Garantía incluida · Envío y cambio sin costo
        </p>
      </div>
    </section>
  );
}
