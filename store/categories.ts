import { createCategoryService, getCategoriesService } from '@/api/services/categories'
import { Category } from '@/api/services/categories/type'
import { handleAsync } from '@/utils/handle-async'

export const useCategoryStore = defineStore('category', () => {
  const isLoading = ref(false)
  const error = ref('')
  const categories = ref<Category[]>([])

  const getCategories = async () => {
    const { response } = await handleAsync(() => getCategoriesService(), isLoading, error)
    if (error.value || !response) return
    categories.value = response
  }

  const createCategory = async (category: Category) => {
    const { response } = await handleAsync(() => createCategoryService(category), isLoading, error)
    if (error.value || !response) return
    categories.value.push(response)
  }

  const findCategoryBySlug = (slug: string) => {
    return categories.value.find((category) => category.slug === slug)
  }

  return {
    error,
    isLoading,
    categories,
    getCategories,
    createCategory,
    findCategoryBySlug
  }
})
