import { apiInstance } from '@/api/instance'
import { BasketProduct } from '@/api/services/basket/type'
import { Product } from '@/api/services/product/type'

export const addToBasketService = (product: Product, userId: number) => {
  const { id, ...rest } = product
  return apiInstance<BasketProduct>('/basket', {
    method: 'POST',
    body: { ...rest, count: 1, productId: id, userId }
  })
}

export const deleteFromBasketService = (id: number) => {
  return apiInstance<BasketProduct>(`/basket/${id}`, {
    method: 'DELETE'
  })
}

export const updateBasketProductCountService = (id: number, count: number) => {
  return apiInstance<BasketProduct>(`/basket/${id}`, {
    method: 'PATCH',
    body: { count }
  })
}

export const getBasketService = (userId: number) => {
  return apiInstance<BasketProduct[]>('/basket', {
    method: 'GET',
    query: { userId }
  })
}
