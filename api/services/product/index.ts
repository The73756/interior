import { apiInstance } from '@/api/instance'
import {
  CreateProductParams,
  GetProductsParams,
  Product,
  ProductGroup
} from '@/api/services/product/type'

export const createProductService = (params: CreateProductParams) => {
  return apiInstance<Product>('/products', {
    method: 'POST',
    body: params
  })
}

export const getProductsService = (params?: GetProductsParams) => {
  return apiInstance<Product[]>('/products', {
    method: 'GET',
    query: {
      categorySlug: params?.categorySlug,
      q: params?.search,
      _limit: params?.limit,
      _page: params?.page
    }
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

export const getProductsGroupService = () => {
  return apiInstance<ProductGroup[]>('/categories', {
    method: 'GET',
    query: {
      _embed: 'products',
      limit: 5
    }
  })
}
