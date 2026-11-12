# PLAN.md — MIAK

> Roadmap de fases para llevar el scaffold a producción.
> Cada fase es independiente y deployable.

## Fase 0 — Foundation (actual)
- [x] Scaffold Next.js 16 + Tailwind 4
- [x] 19 páginas con layout compartido
- [x] Cart context + localStorage
- [x] Mock data completo
- [x] Tipado estricto (Product, Category, CartItem)

## Fase 1 — Data layer (Supabase)
- [ ] Definir schema en Supabase: `products`, `categories`, `product_images`, `variants`
- [ ] Crear client Supabase (`lib/supabase.ts`) con env vars
- [ ] Migrar `mock-data.ts` a queries reales
- [ ] Row Level Security: lectura pública, escritura solo admin
- [ ] Seed de datos iniciales desde mock-data

## Fase 2 — Imágenes reales + CDN
- [ ] Subir fotos de producto a Supabase Storage (o Cloudinary)
- [ ] Actualizar `next.config.ts` remotePatterns
- [ ] Placeholder blur con `next/image`
- [ ] Eliminar dependencia de picsum.photos

## Fase 3 — Auth + cuenta de usuario
- [ ] Supabase Auth (email/password + Google)
- [ ] Página `/cuenta` funcional (hoy es placeholder)
- [ ] Favoritos persistentes (hoy es client-only)
- [ ] Historial de pedidos

## Fase 4 — Checkout + pagos
- [ ] Flujo de checkout (dirección, envío, pago)
- [ ] Integración de pagos (MercadoPago o Stripe)
- [ ] Carrito server-side vinculado a usuario
- [ ] Confirmación + email transaccional

## Fase 5 — Admin
- [ ] Panel de admin para CRUD de productos
- [ ] Gestión de pedidos
- [ ] Dashboard de métricas

## Fase 6 — Deploy + CI/CD
- [ ] Vercel project + env vars
- [ ] GitHub Actions: lint + build + type-check en PRs
- [ ] Preview deployments por branch

## Fase 7 — Polish
- [ ] SEO (metadata dinámica por producto/categoría)
- [ ] Sitemap dinámico
- [ ] Analytics
- [ ] Performance (Core Web Vitals)
- [ ] Accesibilidad (WCAG AA)
