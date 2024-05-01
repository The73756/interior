import { User } from '@/api/services/auth/type'
import { KEY_COOKIE_ACCESS_TOKEN } from '@/constants/keys'
import { useBasketStore } from '@/store/basket'
import { useUserStore } from '@/store/user'

export default defineNuxtRouteMiddleware(async (to) => {
  const userCookie = useCookie<User>(KEY_COOKIE_ACCESS_TOKEN)

  const userStore = useUserStore()
  const basketStore = useBasketStore()
  userStore.setUser(userCookie.value)

  const { user } = storeToRefs(userStore)
  const { isBasketInit } = storeToRefs(basketStore)

  if (user.value?.id && !isBasketInit) {
    await basketStore.getBasket()
  }
})
