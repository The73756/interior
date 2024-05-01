import { User } from '@/api/services/auth/type'
import { KEY_COOKIE_ACCESS_TOKEN } from '@/constants/keys'
import { useUserStore } from '@/store/user'

export default defineNuxtRouteMiddleware(async (to) => {
  const userCookie = useCookie<User>(KEY_COOKIE_ACCESS_TOKEN)

  const userStore = useUserStore()
  userStore.setUser(userCookie.value)
})
