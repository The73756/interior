import { apiInstance } from '@/api/instance'
import { CreateProductParams, GetProductsParams, Product } from '@/api/services/product/type'

export const createProductService = (params: CreateProductParams) => {
  return apiInstance<Product>('/products', {
    method: 'POST',
    body: params
  })
}

export const getProductsService = (params?: GetProductsParams) => {
  return apiInstance<Product[]>('/products', {
    method: 'GET',
    query: params
  })
}

export const getProductDetailsService = (id: string) => {
  return apiInstance<[Product]>('/products', {
    method: 'GET',
    params: {
      id
    }
  })
}
