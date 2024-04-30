import { User } from '@/api/services/auth/type'
import { KEY_COOKIE_ACCESS_TOKEN } from '@/constants/keys'
import { useUserStore } from '@/store/user'

export default defineNuxtRouteMiddleware((to) => {
  const userCookie = useCookie<User>(KEY_COOKIE_ACCESS_TOKEN)

  if (!userCookie.value && to.path !== '/') {
    return navigateTo('/')
  }

  const userStore = useUserStore()
  userStore.setUser(userCookie.value)
})
