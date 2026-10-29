import { Suspense } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products, categories } from "@/lib/mock-data";
import CategorySort from "@/components/product/CategorySort";
import CategoryGrid from "@/components/product/CategoryGrid";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const label = category?.name ?? slug;
  return {
    title: `${label} — MIAK`,
    description: `Explorá nuestra colección de ${label.toLowerCase()}. Equipaje premium para viajeros.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const categoryName = category?.name ?? slug.replace(/-/g, " ");
  const filtered = products.filter((p) => p.category === slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900 transition">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="capitalize font-medium text-neutral-900">{categoryName}</span>
      </nav>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold capitalize text-neutral-900">{categoryName}</h1>
          <p className="mt-1 text-sm text-neutral-500">
            {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
          </p>
        </div>
        <Suspense>
          <CategorySort />
        </Suspense>
      </div>

      <Suspense>
        <CategoryGrid products={filtered} />
      </Suspense>
    </div>
  );
}
