import {
  addToBasketService,
  deleteFromBasketService,
  getBasketService,
  updateBasketProductCountService
} from '@/api/services/basket'
import { BasketProduct } from '@/api/services/basket/type'
import { Product } from '@/api/services/product/type'
import { useUserStore } from '@/store/user'
import { handleAsync } from '@/utils/handle-async'

export const useBasketStore = defineStore('basket', () => {
  const isLoading = ref(false)
  const error = ref('')
  const basket = ref<BasketProduct[]>([])
  const isBasketInit = ref(false)

  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const basketTotal = computed(() =>
    basket.value.reduce((acc, product) => acc + product.count * product.price, 0)
  )

  const getProductFromBasket = (id: number) =>
    computed(() => basket.value.find((product) => Number(product.productId) === Number(id)))

  const getBasket = async () => {
    isBasketInit.value = true

    const { response } = await handleAsync(() => getBasketService(user.value!.id), isLoading, error)
    if (error.value || !response) return
    basket.value = response
  }

  const addToBasket = async (product: Product) => {
    if (!user.value?.id) return console.log('User is not authorized')

    const { response } = await handleAsync(
      () => addToBasketService(product, user.value!.id),
      isLoading,
      error
    )
    if (error.value || !response) return
    basket.value.push(response)
  }

  const deleteFromBasket = async (id: number) => {
    const { response } = await handleAsync(() => deleteFromBasketService(id), isLoading, error)
    if (error.value || !response) return
    basket.value = basket.value.filter((product) => product.id !== id)
  }

  const updateBasketProductCount = async (id: number, count: number) => {
    const { response } = await handleAsync(
      () => updateBasketProductCountService(id, count),
      isLoading,
      error
    )
    if (error.value || !response) return
    basket.value = basket.value.map((product) => (product.id === id ? response : product))
  }

  const resetBasket = () => {
    basket.value = []
  }

  return {
    error,
    isLoading,
    basket,
    isBasketInit,
    getBasket,
    addToBasket,
    deleteFromBasket,
    updateBasketProductCount,
    getProductFromBasket,
    resetBasket,
    basketTotal
  }
})
