import { Category } from '@/api/services/categories/type'

export type Product = {
  id: string
  title: string
  price: number
  images: string[]
  description: string
  categorySlug: string
  categoryId: number
}

export type CreateProductParams = Omit<Product, 'id'>

export type GetProductsParams = {
  categorySlug?: string
  page: number
  limit: number
  search: string
}

export type ProductGroup = {
  products: Product[]
} & Category
