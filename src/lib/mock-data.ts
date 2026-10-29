import type { Product, Category, Testimonial } from "./types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Carry-on",
    slug: "carry-on",
    image: "https://picsum.photos/seed/miak-carryon/400/400",
    productCount: 12,
  },
  {
    id: "cat-2",
    name: "Medianas",
    slug: "medianas",
    image: "https://picsum.photos/seed/miak-medianas/400/400",
    productCount: 8,
  },
  {
    id: "cat-3",
    name: "Grandes",
    slug: "grandes",
    image: "https://picsum.photos/seed/miak-grandes/400/400",
    productCount: 6,
  },
  {
    id: "cat-4",
    name: "Mochilas",
    slug: "mochilas",
    image: "https://picsum.photos/seed/miak-mochilas/400/400",
    productCount: 15,
  },
  {
    id: "cat-5",
    name: "Bolsos",
    slug: "bolsos",
    image: "https://picsum.photos/seed/miak-bolsos/400/400",
    productCount: 10,
  },
  {
    id: "cat-6",
    name: "Organizadores",
    slug: "organizadores",
    image: "https://picsum.photos/seed/miak-organizers/400/400",
    productCount: 20,
  },
  {
    id: "cat-7",
    name: "Set de viaje",
    slug: "set-de-viaje",
    image: "https://picsum.photos/seed/miak-sets/400/400",
    productCount: 5,
  },
  {
    id: "cat-8",
    name: "Accesorios",
    slug: "accesorios",
    image: "https://picsum.photos/seed/miak-accesorios/400/400",
    productCount: 30,
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Aerolux Carry-on 40",
    slug: "aerolux-carry-on-40",
    description:
      "Valija de cabina ultraliviana con carcasa de policarbonato y ruedas silenciosas de 360°. Cumple medidas de cabina para todas las aerolíneas argentinas.",
    price: 189900,
    compareAtPrice: 229900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/aerolux40/800/800",
        alt: "Aerolux Carry-on 40 — vista frontal",
        width: 800,
        height: 800,
      },
      {
        url: "https://picsum.photos/seed/aerolux40b/800/800",
        alt: "Aerolux Carry-on 40 — interior",
        width: 800,
        height: 800,
      },
    ],
    category: "carry-on",
    tags: ["liviana", "cabina", "bestseller"],
    variants: [
      { id: "v1-black", name: "Negro", color: "#0f172a", price: 189900, inStock: true },
      { id: "v1-navy", name: "Azul marino", color: "#1e3a5f", price: 189900, inStock: true },
      { id: "v1-sage", name: "Verde salvia", color: "#87a98f", price: 199900, inStock: true },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "prod-2",
    name: "Nova Spinner 81",
    slug: "nova-spinner-81",
    description:
      "La compañera ideal para viajes largos. 81 cm de capacidad expandible, cerradura TSA integrada y sistema de amortiguación en las ruedas.",
    price: 309900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/nova81/800/800",
        alt: "Nova Spinner 81 — vista frontal",
        width: 800,
        height: 800,
      },
    ],
    category: "grandes",
    tags: ["expandible", "TSA", "viaje largo"],
    variants: [
      { id: "v2-black", name: "Negro", color: "#0f172a", price: 309900, inStock: true },
      { id: "v2-grey", name: "Gris grafito", color: "#6b7280", price: 309900, inStock: true },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "prod-3",
    name: "Pacífico Light Duffel 64",
    slug: "pacifico-light-duffel-64",
    description:
      "Bolso de viaje flexible con estructura semi-rígida, bolsillo para zapatillas y correa bandolera acolchada. Perfecto para escapadas de fin de semana.",
    price: 145900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/pacifico64/800/800",
        alt: "Pacífico Light Duffel 64",
        width: 800,
        height: 800,
      },
    ],
    category: "bolsos",
    tags: ["flexible", "fin de semana", "liviano"],
    inStock: true,
    featured: true,
  },
  {
    id: "prod-4",
    name: "Rutabara Travel Backpack",
    slug: "rutabara-travel-backpack",
    description:
      "Mochila de viaje con apertura tipo valija, compartimiento para laptop de 17\", y panel trasero ventilado. Tu oficina portátil.",
    price: 159900,
    compareAtPrice: 189900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/rutabara/800/800",
        alt: "Rutabara Travel Backpack",
        width: 800,
        height: 800,
      },
    ],
    category: "mochilas",
    tags: ["laptop", "nómada", "apertura valija"],
    variants: [
      { id: "v4-black", name: "Negro", color: "#0f172a", price: 159900, inStock: true },
      { id: "v4-olive", name: "Oliva", color: "#556b2f", price: 159900, inStock: false },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "prod-5",
    name: "Set Organizador 6 Piezas",
    slug: "set-organizador-6-piezas",
    description:
      "Set de 6 bolsas organizadoras de distintos tamaños con cierre y malla ventilada. Comprimí tu ropa y aprovechá cada centímetro de tu valija.",
    price: 34900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/orgset6/800/800",
        alt: "Set Organizador 6 Piezas",
        width: 800,
        height: 800,
      },
    ],
    category: "organizadores",
    tags: ["organizador", "compresión", "set"],
    inStock: true,
  },
  {
    id: "prod-6",
    name: "Estelar Mediana 65",
    slug: "estelar-mediana-65",
    description:
      "Valija mediana con interior dividido, correas de compresión y expansión de 3 cm. El equilibrio justo entre capacidad y maniobrabilidad.",
    price: 249900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/estelar65/800/800",
        alt: "Estelar Mediana 65",
        width: 800,
        height: 800,
      },
    ],
    category: "medianas",
    tags: ["expandible", "equilibrada"],
    variants: [
      { id: "v6-midnight", name: "Midnight blue", color: "#191970", price: 249900, inStock: true },
      { id: "v6-rose", name: "Rosa antiguo", color: "#c9a9a6", price: 249900, inStock: true },
    ],
    inStock: true,
  },
  {
    id: "prod-7",
    name: "Cumbre Hiking Daypack",
    slug: "cumbre-hiking-daypack",
    description:
      "Mochila compacta de 28L con sistema de hidratación, silbato de emergencia y bolsillo de acceso rápido. Para los que viajan con aventura.",
    price: 89900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/cumbre28/800/800",
        alt: "Cumbre Hiking Daypack",
        width: 800,
        height: 800,
      },
    ],
    category: "mochilas",
    tags: ["trekking", "compacta", "hidratación"],
    inStock: true,
  },
  {
    id: "prod-8",
    name: "Néctara Neceser Premium",
    slug: "nectara-neceser-premium",
    description:
      "Neceser de viaje con gancho colgante, compartimientos impermeables y espejo desmontable. Organización de baño profesional.",
    price: 42900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/nectara/800/800",
        alt: "Néctara Neceser Premium",
        width: 800,
        height: 800,
      },
    ],
    category: "accesorios",
    tags: ["neceser", "impermeable", "colgante"],
    inStock: true,
  },
  {
    id: "prod-9",
    name: "Set Trío Viajero",
    slug: "set-trio-viajero",
    description:
      "Carry-on + Mediana + Grande en juego coordinado. Ahorrá comprando el set completo con descuento exclusivo.",
    price: 599900,
    compareAtPrice: 749700,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/settrio/800/800",
        alt: "Set Trío Viajero — 3 valijas",
        width: 800,
        height: 800,
      },
    ],
    category: "set-de-viaje",
    tags: ["set", "ahorro", "completo"],
    variants: [
      { id: "v9-black", name: "Negro", color: "#0f172a", price: 599900, inStock: true },
      { id: "v9-grey", name: "Gris plata", color: "#c0c0c0", price: 599900, inStock: true },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "prod-10",
    name: "Bolsa Montevideo Weekender",
    slug: "bolsa-montevideo-weekender",
    description:
      "Bolso de cuero sintético premium con compartimiento inferior para zapatos. Elegancia para viajes cortos de negocios o placer.",
    price: 124900,
    currency: "ARS",
    images: [
      {
        url: "https://picsum.photos/seed/montevideo/800/800",
        alt: "Bolsa Montevideo Weekender",
        width: 800,
        height: 800,
      },
    ],
    category: "bolsos",
    tags: ["weekender", "cuero", "negocios"],
    inStock: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const dealProducts = products.filter((p) => p.compareAtPrice);

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "Lucía M.",
    text: "Las valijas son otra cosa. Llevé la Aerolux a Europa 3 semanas y volvió impecable. Súper liviana.",
    rating: 5,
  },
  {
    id: "test-2",
    author: "Martín P.",
    text: "Entró todo a cabin y ¡algo! La rueda gira como manteca por Ezeiza. Recomendadísima.",
    rating: 5,
  },
  {
    id: "test-3",
    author: "Valentina R.",
    text: "Necesitaba un set completo y el Trío Viajero fue la mejor inversión. Calidad premium a precio argentino.",
    rating: 5,
  },
  {
    id: "test-4",
    author: "Santiago D.",
    text: "La Rutabara es mi mochila de todos los días. Para el laburo, para viajar, para todo. El compartimiento de laptop es genial.",
    rating: 4,
  },
];
