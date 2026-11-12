-- Seed data for MIAK e-commerce (translated from src/lib/mock-data.ts)
-- Run after 001_initial_schema.sql
-- Uses fixed UUIDs so foreign keys resolve

-- Categories (product_count set to 0; the trigger updates it on product insert)
insert into categories (id, name, slug, image_url) values
  ('a0000000-0000-0000-0000-000000000001', 'Carry-on', 'carry-on', 'https://picsum.photos/seed/miak-carryon/400/400'),
  ('a0000000-0000-0000-0000-000000000002', 'Medianas', 'medianas', 'https://picsum.photos/seed/miak-medianas/400/400'),
  ('a0000000-0000-0000-0000-000000000003', 'Grandes', 'grandes', 'https://picsum.photos/seed/miak-grandes/400/400'),
  ('a0000000-0000-0000-0000-000000000004', 'Mochilas', 'mochilas', 'https://picsum.photos/seed/miak-mochilas/400/400'),
  ('a0000000-0000-0000-0000-000000000005', 'Bolsos', 'bolsos', 'https://picsum.photos/seed/miak-bolsos/400/400'),
  ('a0000000-0000-0000-0000-000000000006', 'Organizadores', 'organizadores', 'https://picsum.photos/seed/miak-organizers/400/400'),
  ('a0000000-0000-0000-0000-000000000007', 'Set de viaje', 'set-de-viaje', 'https://picsum.photos/seed/miak-sets/400/400'),
  ('a0000000-0000-0000-0000-000000000008', 'Accesorios', 'accesorios', 'https://picsum.photos/seed/miak-accesorios/400/400');

-- Products
insert into products (id, name, slug, description, price, compare_at_price, currency, category_id, tags, in_stock, featured) values
  ('b0000000-0000-0000-0000-000000000001', 'Aerolux Carry-on 40', 'aerolux-carry-on-40',
   'Valija de cabina ultraliviana con carcasa de policarbonato y ruedas silenciosas de 360°. Cumple medidas de cabina para todas las aerolíneas argentinas.',
   189900, 229900, 'ARS', 'a0000000-0000-0000-0000-000000000001', '{"liviana","cabina","bestseller"}', true, true),

  ('b0000000-0000-0000-0000-000000000002', 'Nova Spinner 81', 'nova-spinner-81',
   'La compañera ideal para viajes largos. 81 cm de capacidad expandible, cerradura TSA integrada y sistema de amortiguación en las ruedas.',
   309900, null, 'ARS', 'a0000000-0000-0000-0000-000000000003', '{"expandible","TSA","viaje largo"}', true, true),

  ('b0000000-0000-0000-0000-000000000003', 'Pacífico Light Duffel 64', 'pacifico-light-duffel-64',
   'Bolso de viaje flexible con estructura semi-rígida, bolsillo para zapatillas y correa bandolera acolchada. Perfecto para escapadas de fin de semana.',
   145900, null, 'ARS', 'a0000000-0000-0000-0000-000000000005', '{"flexible","fin de semana","liviano"}', true, true),

  ('b0000000-0000-0000-0000-000000000004', 'Rutabara Travel Backpack', 'rutabara-travel-backpack',
   'Mochila de viaje con apertura tipo valija, compartimiento para laptop de 17", y panel trasero ventilado. Tu oficina portátil.',
   159900, 189900, 'ARS', 'a0000000-0000-0000-0000-000000000004', '{"laptop","nómada","apertura valija"}', true, true),

  ('b0000000-0000-0000-0000-000000000005', 'Set Organizador 6 Piezas', 'set-organizador-6-piezas',
   'Set de 6 bolsas organizadoras de distintos tamaños con cierre y malla ventilada. Comprimí tu ropa y aprovechá cada centímetro de tu valija.',
   34900, null, 'ARS', 'a0000000-0000-0000-0000-000000000006', '{"organizador","compresión","set"}', true, false),

  ('b0000000-0000-0000-0000-000000000006', 'Estelar Mediana 65', 'estelar-mediana-65',
   'Valija mediana con interior dividido, correas de compresión y expansión de 3 cm. El equilibrio justo entre capacidad y maniobrabilidad.',
   249900, null, 'ARS', 'a0000000-0000-0000-0000-000000000002', '{"expandible","equilibrada"}', true, false),

  ('b0000000-0000-0000-0000-000000000007', 'Cumbre Hiking Daypack', 'cumbre-hiking-daypack',
   'Mochila compacta de 28L con sistema de hidratación, silbato de emergencia y bolsillo de acceso rápido. Para los que viajan con aventura.',
   89900, null, 'ARS', 'a0000000-0000-0000-0000-000000000004', '{"trekking","compacta","hidratación"}', true, false),

  ('b0000000-0000-0000-0000-000000000008', 'Néctara Neceser Premium', 'nectara-neceser-premium',
   'Neceser de viaje con gancho colgante, compartimientos impermeables y espejo desmontable. Organización de baño profesional.',
   42900, null, 'ARS', 'a0000000-0000-0000-0000-000000000008', '{"neceser","impermeable","colgante"}', true, false),

  ('b0000000-0000-0000-0000-000000000009', 'Set Trío Viajero', 'set-trio-viajero',
   'Carry-on + Mediana + Grande en juego coordinado. Ahorrá comprando el set completo con descuento exclusivo.',
   599900, 749700, 'ARS', 'a0000000-0000-0000-0000-000000000007', '{"set","ahorro","completo"}', true, true),

  ('b0000000-0000-0000-0000-000000000010', 'Bolsa Montevideo Weekender', 'bolsa-montevideo-weekender',
   'Bolso de cuero sintético premium con compartimiento inferior para zapatos. Elegancia para viajes cortos de negocios o placer.',
   124900, null, 'ARS', 'a0000000-0000-0000-0000-000000000005', '{"weekender","cuero","negocios"}', true, false);

-- Product images
insert into product_images (product_id, url, alt, width, height, position) values
  ('b0000000-0000-0000-0000-000000000001', 'https://picsum.photos/seed/aerolux40/800/800', 'Aerolux Carry-on 40 — vista frontal', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000001', 'https://picsum.photos/seed/aerolux40b/800/800', 'Aerolux Carry-on 40 — interior', 800, 800, 1),
  ('b0000000-0000-0000-0000-000000000002', 'https://picsum.photos/seed/nova81/800/800', 'Nova Spinner 81 — vista frontal', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000003', 'https://picsum.photos/seed/pacifico64/800/800', 'Pacífico Light Duffel 64', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000004', 'https://picsum.photos/seed/rutabara/800/800', 'Rutabara Travel Backpack', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000005', 'https://picsum.photos/seed/orgset6/800/800', 'Set Organizador 6 Piezas', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000006', 'https://picsum.photos/seed/estelar65/800/800', 'Estelar Mediana 65', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000007', 'https://picsum.photos/seed/cumbre28/800/800', 'Cumbre Hiking Daypack', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000008', 'https://picsum.photos/seed/nectara/800/800', 'Néctara Neceser Premium', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000009', 'https://picsum.photos/seed/settrio/800/800', 'Set Trío Viajero — 3 valijas', 800, 800, 0),
  ('b0000000-0000-0000-0000-000000000010', 'https://picsum.photos/seed/montevideo/800/800', 'Bolsa Montevideo Weekender', 800, 800, 0);

-- Variants
insert into variants (product_id, name, color, price, in_stock) values
  ('b0000000-0000-0000-0000-000000000001', 'Negro', '#0f172a', 189900, true),
  ('b0000000-0000-0000-0000-000000000001', 'Azul marino', '#1e3a5f', 189900, true),
  ('b0000000-0000-0000-0000-000000000001', 'Verde salvia', '#87a98f', 199900, true),
  ('b0000000-0000-0000-0000-000000000002', 'Negro', '#0f172a', 309900, true),
  ('b0000000-0000-0000-0000-000000000002', 'Gris grafito', '#6b7280', 309900, true),
  ('b0000000-0000-0000-0000-000000000004', 'Negro', '#0f172a', 159900, true),
  ('b0000000-0000-0000-0000-000000000004', 'Oliva', '#556b2f', 159900, false),
  ('b0000000-0000-0000-0000-000000000006', 'Midnight blue', '#191970', 249900, true),
  ('b0000000-0000-0000-0000-000000000006', 'Rosa antiguo', '#c9a9a6', 249900, true),
  ('b0000000-0000-0000-0000-000000000009', 'Negro', '#0f172a', 599900, true),
  ('b0000000-0000-0000-0000-000000000009', 'Gris plata', '#c0c0c0', 599900, true);
