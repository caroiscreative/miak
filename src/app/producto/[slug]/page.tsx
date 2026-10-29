import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/mock-data";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";
import ProductTabs from "@/components/product/ProductTabs";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Producto no encontrado — MIAK" };
  return {
    title: `${product.name} — MIAK`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const categoryLabel = product.category.replace(/-/g, " ");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-8 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900 transition">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          href={`/categoria/${product.category}`}
          className="capitalize hover:text-neutral-900 transition"
        >
          {categoryLabel}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-neutral-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <ProductGallery images={product.images} />
        <ProductDetails product={product} />
      </div>

      <div className="mt-16 border-t border-neutral-200 pt-8">
        <ProductTabs product={product} />
      </div>
    </div>
  );
}
