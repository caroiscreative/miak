import { unstable_cache } from 'next/cache'
import { supabase } from './supabase'
import type { Product, ProductImage, ProductVariant, Category } from './types'

interface ProductRow {
  id: string
  name: string
  slug: string
  description: string
  price: number
  compare_at_price: number | null
  currency: string
  category_id: string
  tags: string[]
  in_stock: boolean
  featured: boolean
  product_images: ImageRow[]
  variants: VariantRow[]
  categories: { slug: string } | null
}

interface ImageRow {
  url: string
  alt: string | null
  width: number
  height: number
  position: number
}

interface VariantRow {
  id: string
  name: string
  color: string | null
  size: string | null
  price: number
  in_stock: boolean
}

function toProduct(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description ?? '',
    price: row.price,
    ...(row.compare_at_price != null && { compareAtPrice: row.compare_at_price }),
    currency: row.currency,
    images: (row.product_images ?? [])
      .sort((a, b) => a.position - b.position)
      .map((img): ProductImage => ({
        url: img.url,
        alt: img.alt ?? '',
        width: img.width,
        height: img.height,
      })),
    category: row.categories?.slug ?? '',
    tags: row.tags ?? [],
    ...(row.variants?.length && {
      variants: row.variants.map((v): ProductVariant => ({
        id: v.id,
        name: v.name,
        ...(v.color && { color: v.color }),
        ...(v.size && { size: v.size }),
        price: v.price,
        inStock: v.in_stock,
      })),
    }),
    inStock: row.in_stock,
    ...(row.featured && { featured: true }),
  }
}

const PRODUCT_SELECT = `
  *,
  product_images (*),
  variants (*),
  categories!inner (slug)
` as const

export async function getProducts(options?: {
  category?: string
  featured?: boolean
  limit?: number
}): Promise<Product[]> {
  let query = supabase
    .from('products')
    .select(PRODUCT_SELECT)

  if (options?.category) {
    query = query.eq('categories.slug', options.category)
  }
  if (options?.featured) {
    query = query.eq('featured', true)
  }
  if (options?.limit) {
    query = query.limit(options.limit)
  }

  const { data, error } = await query.order('created_at', { ascending: false })
  if (error) throw error
  return (data as unknown as ProductRow[]).map(toProduct)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select(PRODUCT_SELECT)
    .eq('slug', slug)
    .maybeSingle()

  if (error) throw error
  if (!data) return null
  return toProduct(data as unknown as ProductRow)
}

async function _getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) throw error
  return (data ?? []).map((row): Category => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    image: row.image_url ?? '',
    productCount: row.product_count ?? 0,
  }))
}

export const getCategories = unstable_cache(_getCategories, ['categories'], {
  revalidate: 3600,
})

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .maybeSingle()

  if (error) throw error
  if (!data) return null
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    image: data.image_url ?? '',
    productCount: data.product_count ?? 0,
  }
}
