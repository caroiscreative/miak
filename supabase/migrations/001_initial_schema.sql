-- MIAK e-commerce initial schema
-- Run against a Supabase project with auth already enabled

-- Categories
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  image_url text,
  product_count int not null default 0,
  created_at timestamptz not null default now()
);

create index idx_categories_slug on categories (slug);

-- Products
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  price numeric not null,
  compare_at_price numeric,
  currency text not null default 'ARS',
  category_id uuid references categories (id),
  tags text[] not null default '{}',
  in_stock boolean not null default true,
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create index idx_products_slug on products (slug);
create index idx_products_category_id on products (category_id);

-- Product images
create table product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  url text not null,
  alt text,
  width int not null default 800,
  height int not null default 800,
  position int not null default 0
);

create index idx_product_images_product_id on product_images (product_id);

-- Variants
create table variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products (id) on delete cascade,
  name text not null,
  color text,
  size text,
  price numeric not null,
  in_stock boolean not null default true
);

create index idx_variants_product_id on variants (product_id);

-- Profiles (extends auth.users)
create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  avatar_url text,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  favorites uuid[] not null default '{}',
  created_at timestamptz not null default now()
);

-- Auto-create profile on signup
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', '')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- Keep categories.product_count in sync
create or replace function update_product_count()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    update public.categories
    set product_count = product_count + 1
    where id = new.category_id;
  elsif tg_op = 'DELETE' then
    update public.categories
    set product_count = product_count - 1
    where id = old.category_id;
  elsif tg_op = 'UPDATE' and old.category_id is distinct from new.category_id then
    update public.categories
    set product_count = product_count - 1
    where id = old.category_id;
    update public.categories
    set product_count = product_count + 1
    where id = new.category_id;
  end if;
  return null;
end;
$$;

create trigger trg_product_count
  after insert or update or delete on products
  for each row execute function update_product_count();

-- Row Level Security
alter table categories enable row level security;
alter table products enable row level security;
alter table product_images enable row level security;
alter table variants enable row level security;
alter table profiles enable row level security;

-- Public read on catalog tables
create policy "Public read categories"
  on categories for select
  using (true);

create policy "Public read products"
  on products for select
  using (true);

create policy "Public read product_images"
  on product_images for select
  using (true);

create policy "Public read variants"
  on variants for select
  using (true);

-- Admin write on catalog tables
create policy "Admin insert categories"
  on categories for insert
  with check (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin update categories"
  on categories for update
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin delete categories"
  on categories for delete
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin insert products"
  on products for insert
  with check (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin update products"
  on products for update
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin delete products"
  on products for delete
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin insert product_images"
  on product_images for insert
  with check (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin update product_images"
  on product_images for update
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin delete product_images"
  on product_images for delete
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin insert variants"
  on variants for insert
  with check (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin update variants"
  on variants for update
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Admin delete variants"
  on variants for delete
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Profiles: users read/update own row
create policy "Users read own profile"
  on profiles for select
  using (id = auth.uid());

create policy "Users update own profile"
  on profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());

-- Admin can read all profiles
create policy "Admin read all profiles"
  on profiles for select
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );
