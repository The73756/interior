import dayjs from 'dayjs'
import { createCategoryService } from '@/api/services/categories'
import { Category } from '@/api/services/categories/type'
import { handleAsync } from '@/utils/handle-async'

export const useAdminStore = defineStore('admin', () => {
  const isLoading = ref(false)
  const error = ref('')

  const addCategory = async (category: Category) => {
    const { response } = await handleAsync(() => createCategoryService(category), isLoading, error)
  }

  return {
    error,
    isLoading
  }
})
