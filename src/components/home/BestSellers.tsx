import Link from "next/link";
import Image from "next/image";

const featured = [
  { name: "BOLSOS", slug: "bolsos", seed: "miak-best-bolsos" },
  { name: "VALIJAS", slug: "valijas", seed: "miak-best-valijas" },
  { name: "MOCHILAS", slug: "mochilas", seed: "miak-best-mochilas" },
];

export default function BestSellers() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
            VARIEDAD DE ESTILOS Y FUNCIONALIDAD
          </p>
          <h2 className="font-display text-3xl font-bold italic text-neutral-900 md:text-4xl">
            Nuestros más vendidos
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/categoria/${item.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src={`https://picsum.photos/seed/${item.seed}/600/750`}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <h3 className="absolute bottom-6 left-6 font-display text-2xl font-bold tracking-wide text-white md:text-3xl">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-900" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        </div>
      </div>
    </section>
  );
}
