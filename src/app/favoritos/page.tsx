import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Favoritos — MIAK",
  description: "Tus productos favoritos guardados.",
};

export default function FavoritosPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <nav className="mb-12 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Favoritos</span>
      </nav>

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
        <Heart className="h-10 w-10 text-neutral-400" />
      </div>
      <h1 className="mt-6 text-2xl font-bold text-neutral-900">
        Tus favoritos
      </h1>
      <p className="mt-2 text-neutral-500">
        Todavía no tenés productos guardados como favoritos.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        Explorar productos
      </Link>
    </div>
  );
}
