import Image from "next/image";
import Link from "next/link";

export default function Collections() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/colecciones/esenciales"
            className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="https://picsum.photos/seed/miak-col-1/800/600"
              alt="Colección Esenciales"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                NUESTRAS
                <br />
                COLECCIONES
              </h3>
              <span className="mt-4 inline-block text-sm font-medium text-white underline underline-offset-4">
                Ver colección →
              </span>
            </div>
          </Link>

          <Link
            href="/colecciones/futuro"
            className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="https://picsum.photos/seed/miak-col-2/800/600"
              alt="Colección Viajeros del Mañana"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />
            <div className="absolute bottom-0 right-0 p-8 text-right">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-white/70">
                MIAK ▸
              </p>
              <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                DISEÑADO PARA LOS
                <br />
                VIAJEROS DEL
                <br />
                MAÑANA.
              </h3>
              <p className="mt-3 max-w-xs text-sm text-white/80 ml-auto">
                Unión de tecnología y diseño para crear lo último para tus viajes.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-white underline underline-offset-4">
                Ver novedades →
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Link
            href="/blog"
            className="group relative block aspect-[3/2] overflow-hidden rounded-lg"
          >
            <Image
              src="https://picsum.photos/seed/miak-story-1/800/530"
              alt="El viaje empieza antes de salir"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-lg font-bold text-white">
                El viaje empieza antes de salir
              </h3>
              <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-widest text-white/80">
                LEER HISTORIA →
              </span>
            </div>
          </Link>

          <Link
            href="/blog"
            className="group relative block aspect-[3/2] overflow-hidden rounded-lg"
          >
            <Image
              src="https://picsum.photos/seed/miak-story-2/800/530"
              alt="Viajar liviano cambia el trayecto"
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-lg font-bold text-white">
                Viajar liviano cambia el trayecto
              </h3>
              <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-widest text-white/80">
                LEER HISTORIA →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
