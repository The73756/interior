import { apiInstance } from '@/api/instance'
import { Category } from '@/api/services/categories/type'

export const createCategoryService = (params: Category) => {
  return apiInstance<Category>('/categories', {
    method: 'POST',
    body: params
  })
}

export const getCategoriesService = () => {
  return apiInstance<Category[]>('/categories', {
    method: 'GET'
  })
}
