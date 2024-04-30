import { getProductDetailsService } from '@/api/services/product'
import { Product } from '@/api/services/product/type'
import { handleAsync } from '@/utils/handle-async'

export const useProductDetailsStore = defineStore('product-details', () => {
  const isLoading = ref(false)
  const error = ref('')
  const productDetails = ref<Product>()

  const getProductDetails = async (productId: string) => {
    const { response } = await handleAsync(
      () => getProductDetailsService(productId),
      isLoading,
      error
    )
    if (error.value || !response) return
    productDetails.value = response[0]
  }

  return {
    error,
    isLoading,
    productDetails,
    getProductDetails
  }
})
