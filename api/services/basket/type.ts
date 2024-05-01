import { Product } from '@/api/services/product/type'

export type BasketProduct = {
  userId: number
  count: number
  productId: number
} & Product
