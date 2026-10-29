"use client";

import Link from "next/link";
import { Truck, RefreshCw, Shield, Headphones } from "lucide-react";

const trustBadges = [
  { icon: Truck, label: "Envío a todo el país" },
  { icon: RefreshCw, label: "Devolución sin costo" },
  { icon: Shield, label: "Garantía de calidad" },
  { icon: Headphones, label: "Servicio oficial" },
];

const shopLinks = [
  { label: "Carry-on", href: "/categoria/carry-on" },
  { label: "Valijas", href: "/categoria/valijas" },
  { label: "Mochilas", href: "/categoria/mochilas" },
  { label: "Bolsos", href: "/categoria/bolsos" },
  { label: "Sets", href: "/categoria/sets" },
  { label: "Accesorios", href: "/categoria/accesorios" },
];

const supportLinks = [
  { label: "Centro de ayuda", href: "/ayuda" },
  { label: "Seguí tu envío", href: "/seguimiento" },
  { label: "Devoluciones", href: "/devoluciones" },
  { label: "Garantía", href: "/garantia" },
  { label: "Contacto", href: "/contacto" },
];

const aboutLinks = [
  { label: "Nuestra historia", href: "/sobre-miak" },
  { label: "Sostenibilidad", href: "/sostenibilidad" },
  { label: "Prensa", href: "/prensa" },
  { label: "Trabajá con nosotros", href: "/trabajos" },
];

function NewsletterSection() {
  return (
    <section className="bg-[var(--color-primary)] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/50">
          EL PRÓXIMO DESTINO
        </p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          El próximo viaje empieza acá.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
          Novedades, guías y 10% off en tu primera compra.
        </p>
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Tu email"
            className="h-11 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-sm transition-colors focus:border-white/40 focus:bg-white/15"
          />
          <button
            type="submit"
            className="h-11 shrink-0 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Quiero mi 10% off
          </button>
        </form>
      </div>
    </section>
  );
}

function TrustBadges() {
  return (
    <div className="border-t border-neutral-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {trustBadges.map((badge) => (
          <div
            key={badge.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50">
              <badge.icon className="h-5 w-5 text-neutral-700" />
            </div>
            <span className="text-xs font-medium text-neutral-700">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <TrustBadges />
      <NewsletterSection />

      <div className="bg-[#0c1322] px-4 pt-12 pb-6 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Main footer grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand column */}
            <div>
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[var(--color-primary)]">
                  <span className="text-lg font-bold leading-none">M</span>
                </div>
                <span className="text-xl font-bold tracking-tight">MIAK</span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                Equipaje diseñado para viajeros que no negocian estilo por
                funcionalidad. Liviano, resistente, con vos.
              </p>
              <div className="mt-5 flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-white"
                  aria-label="X"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 transition-colors hover:text-white"
                  aria-label="Pinterest"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            <FooterColumn title="COMPRAR" links={shopLinks} />
            <FooterColumn title="SOPORTE" links={supportLinks} />
            <FooterColumn title="SOBRE MIAK" links={aboutLinks} />
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:justify-between">
            <span>&copy; 2026 MIAK. Todos los derechos reservados.</span>
            <div className="flex gap-6">
              <Link
                href="/terminos"
                className="transition-colors hover:text-white/50"
              >
                Términos y condiciones
              </Link>
              <Link
                href="/privacidad"
                className="transition-colors hover:text-white/50"
              >
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
