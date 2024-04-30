import { createProductService, getProductsService } from '@/api/services/product'
import { CreateProductParams, Product } from '@/api/services/product/type'
import { handleAsync } from '@/utils/handle-async'

export const useProductStore = defineStore('product', () => {
  const isLoading = ref(false)
  const error = ref('')
  const products = ref<Product[]>([])

  const getProducts = async (categorySlug?: string) => {
    const { response } = await handleAsync(
      () =>
        getProductsService({
          categorySlug
        }),
      isLoading,
      error
    )
    if (error.value || !response) return
    products.value = response
  }

  const createProduct = async (product: CreateProductParams) => {
    const { response } = await handleAsync(() => createProductService(product), isLoading, error)
    if (error.value || !response) return
    products.value.push(response)
  }

  return {
    error,
    isLoading,
    products,
    getProducts,
    createProduct
  }
})
