"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";

const categories = [
  { name: "CARRY-ON", slug: "carry-on" },
  { name: "MEDIANAS", slug: "medianas" },
  { name: "GRANDES", slug: "grandes" },
  { name: "MOCHILAS", slug: "mochilas" },
  { name: "ACCESORIOS", slug: "accesorios" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Promotion strip */}
      <div className="bg-[var(--color-primary)] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs tracking-wide sm:px-6">
          <span>Envío gratis. Hasta 6 cuotas sin interés con tarjetas seleccionadas</span>
          <span className="hidden sm:inline">
            Envíos en 24hs en CABA y GBA. Seguí tu pedido en tiempo real.
          </span>
        </div>
      </div>

      {/* Utility bar */}
      <div className="hidden border-b border-neutral-100 bg-neutral-50 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs text-neutral-500">
          <span>Bienvenido a MIAK — Tu equipaje, tu estilo</span>
          <nav className="flex gap-6">
            <Link href="/blog" className="hover:text-neutral-900 transition-colors">
              Blog
            </Link>
            <Link href="/ayuda" className="hover:text-neutral-900 transition-colors">
              Ayuda
            </Link>
            <Link
              href="/seguimiento"
              className="hover:text-neutral-900 transition-colors"
            >
              Seguí tu envío
            </Link>
          </nav>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-neutral-100">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:gap-8 lg:py-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden -ml-1 p-1.5 text-neutral-700"
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Brand */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
              <span className="text-lg font-bold leading-none">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-900">
              MIAK
            </span>
          </Link>

          {/* Search bar — desktop */}
          <div className="hidden flex-1 lg:block">
            <form
              className="relative flex items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <Search className="pointer-events-none absolute left-4 h-4.5 w-4.5 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscá mochilas, valijas y más..."
                className="h-10 w-full rounded-full border border-neutral-200 bg-neutral-50 pl-11 pr-24 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-300 focus:bg-white"
              />
              <button
                type="submit"
                className="absolute right-1.5 h-7 rounded-full bg-[var(--color-primary)] px-4 text-xs font-medium text-white transition-opacity hover:opacity-90"
              >
                Buscar
              </button>
            </form>
          </div>

          {/* Commerce actions */}
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            {/* Search toggle — mobile */}
            <button
              className="p-2 text-neutral-700 lg:hidden"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              href="/cuenta"
              className="group hidden flex-col items-center gap-0.5 p-2 sm:flex"
            >
              <User className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-900" />
              <span className="text-[10px] text-neutral-500 group-hover:text-neutral-700">
                Cuenta
              </span>
            </Link>

            <Link
              href="/favoritos"
              className="group hidden flex-col items-center gap-0.5 p-2 sm:flex"
            >
              <Heart className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-900" />
              <span className="text-[10px] text-neutral-500 group-hover:text-neutral-700">
                Favoritos
              </span>
            </Link>

            <Link
              href="/carrito"
              className="group relative flex flex-col items-center gap-0.5 p-2"
            >
              <ShoppingBag className="h-5 w-5 text-neutral-700 transition-colors group-hover:text-neutral-900" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-medium text-white">
                  {itemCount}
                </span>
              )}
              <span className="text-[10px] text-neutral-500 group-hover:text-neutral-700">
                Carrito
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Category navigation — desktop */}
      <nav className="hidden border-b border-neutral-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <ul className="flex items-center gap-8">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categoria/${cat.slug}`}
                  className="inline-block py-3 text-sm font-medium tracking-wide text-neutral-700 transition-colors hover:text-neutral-900"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/ofertas"
                className="inline-block py-3 text-sm font-semibold tracking-wide text-blue-600 transition-colors hover:text-blue-700"
              >
                OFERTAS
              </Link>
            </li>
          </ul>
          <Link
            href="/productos"
            className="flex items-center gap-1 py-3 text-sm text-neutral-500 transition-colors hover:text-neutral-700"
          >
            Ver todo
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
                  <span className="font-bold leading-none">M</span>
                </div>
                <span className="text-lg font-bold tracking-tight">MIAK</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-neutral-500"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile search */}
            <div className="border-b border-neutral-100 px-4 py-3">
              <form
                className="relative flex items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <Search className="pointer-events-none absolute left-3 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 pl-9 pr-3 text-sm outline-none focus:border-neutral-300"
                />
              </form>
            </div>

            {/* Mobile categories */}
            <nav className="py-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categoria/${cat.slug}`}
                  className="block px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/ofertas"
                className="block px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                OFERTAS
              </Link>
            </nav>

            <div className="border-t border-neutral-100 py-2">
              <Link
                href="/cuenta"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-4.5 w-4.5" />
                Mi cuenta
              </Link>
              <Link
                href="/favoritos"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="h-4.5 w-4.5" />
                Favoritos
              </Link>
              <Link
                href="/seguimiento"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingBag className="h-4.5 w-4.5" />
                Seguí tu envío
              </Link>
            </div>

            <div className="border-t border-neutral-100 py-2">
              <Link
                href="/blog"
                className="block px-4 py-2.5 text-sm text-neutral-500 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/ayuda"
                className="block px-4 py-2.5 text-sm text-neutral-500 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ayuda
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
