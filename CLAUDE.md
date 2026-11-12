# CLAUDE.md — MIAK

> E-commerce de equipaje y accesorios de viaje. Next.js 16 + Supabase + Tailwind 4.
> **Marca:** "MIAK — Equipaje para viajeros". Maletas, mochilas, bolsos, accesorios.
>
> Última actualización: 2026-11-09

## Estado actual

El proyecto tiene scaffold completo con **mock data** (picsum.photos). No hay conexión
real a Supabase todavía — la dependencia está instalada pero sin client ni tablas.

- **19 páginas** funcionando con datos estáticos
- **Cart** funcional (context + localStorage)
- **0 tests**, **0 CI/CD**
- Design system light-only, tokens en `globals.css`
- Deploy: ninguno (tiene `.next/` pero sin Vercel config)

### Origen

Existió una landing estática en `One Shots/MIAK/` (index.html + logos.html) como
prototipo visual. El proyecto real es esta carpeta. La landing conserva los tokens
de marca originales (rosa `#F7C4DD`, noche `#1A1416`, cuero `#7A4B32`).

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16.4.2 (App Router, Turbopack) |
| UI | React 19.3, Tailwind CSS 4 |
| Fonts | Inter (body), Playfair Display (display) |
| DB | Supabase (pendiente de conectar) |
| Icons | lucide-react |
| Deploy | Vercel (pendiente) |

## Estructura de archivos

```
src/
  app/
    page.tsx              ← Home: Hero, TrustBadges, CategoryCarousel, BestSellers,
                            ProductSpotlight, WeeklyDeals, Recommendations,
                            Collections, Testimonials, FAQ
    layout.tsx            ← CartProvider, Header, Footer, fonts
    globals.css           ← Tokens (:root), Tailwind @theme
    producto/[slug]/      ← PDP con gallery, details, tabs
    categoria/[slug]/     ← Listado de categoría
    carrito/              ← Cart page (lee context)
    contacto, ayuda, blog, cuenta, favoritos, ofertas,
    seguimiento, sobre-miak, sostenibilidad, trabajos,
    prensa, privacidad, garantia, devoluciones, terminos
  components/
    home/                 ← 9 secciones del home
    layout/               ← Header (300 loc), Footer
    product/              ← Gallery, Details, Tabs, CategoryGrid, ProductCard, etc.
  lib/
    types.ts              ← Product, Category, CartItem, Testimonial
    cart-context.tsx       ← Cart state + localStorage persistence
    mock-data.ts           ← Todos los datos hardcodeados
```

## Tokens de diseño (light-only)

```css
--background: #ffffff    --foreground: #0a0a0a
--muted: #f5f5f5         --accent: #2563eb
--primary: #0a0a0a       --destructive: #dc2626
--border: #e5e5e5        --radius: 0.375rem
```

Nota: la landing original usaba rosa/noche/cuero. El Next.js usa un palette neutral.
Confirmar con Carolina cuál es la dirección de marca antes de migrar colores.

## Modelo de datos

```typescript
Product { id, name, slug, description, price, compareAtPrice?, currency,
          images[], category, tags[], variants?[], inStock, featured? }
Category { id, name, slug, image, productCount }
CartItem { product, variant?, quantity }
```

Las imágenes son URLs de picsum.photos con seeds (`miak-carryon`, etc.).

## Cómo correr

```bash
cd /Users/carolina/Documents/Claude/Projects/miak
npm run dev    # http://localhost:3000
npm run build  # Verifica tipado + genera .next
npm run lint   # ESLint
```

## Convenciones

- **Solo light mode.** Dark mode deshabilitado en CSS.
- **Español para el UI** (producto, carrito, categoría). Código en inglés.
- **No hay API routes todavía.** Todo es estático/client-side.
- **Imágenes:** `next/image` con `remotePatterns` para picsum. Cuando haya imágenes
  reales, actualizar `next.config.ts`.
- **Cart:** persiste en localStorage bajo `miak-cart`. Sin auth = sin carrito server-side.

## Decisiones tomadas

- Next.js 16 con Turbopack y `@tailwindcss/turbopack` loader.
- `cacheComponents: true` y `partialPrefetching: true` en config.
- Páginas informativas (términos, garantía, etc.) son estáticas, no MDX.

## Qué NO hacer

- No conectar Supabase sin schema definido primero.
- No agregar dark mode sin decisión de Carolina.
- No cambiar de picsum a imágenes reales sin tener las fotos.
- No agregar auth/checkout sin plan de flujo aprobado.
