import dayjs from 'dayjs'
import { loginService, registrationService } from '@/api/services/auth'
import { LoginParams, RegistrationParams, User } from '@/api/services/auth/type'
import { KEY_COOKIE_ACCESS_TOKEN } from '@/constants/keys'
import { handleAsync } from '@/utils/handle-async'

export const useUserStore = defineStore('user', () => {
  const isLoading = ref(false)
  const error = ref('')
  const user = ref<User | null>(null)

  const isAuth = computed(() => Boolean(user.value))

  const registration = async (params: RegistrationParams) => {
    const { response } = await handleAsync(() => registrationService(params), isLoading, error)

    if (error.value || !response) return

    const accessCookie = useCookie(KEY_COOKIE_ACCESS_TOKEN, {
      expires: dayjs().add(1, 'month').toDate()
    })

    accessCookie.value = JSON.stringify(response)
    user.value = response
  }

  const login = async (params: LoginParams) => {
    const { response } = await handleAsync(() => loginService(params), isLoading, error)

    if (error.value || !response) return

    const accessCookie = useCookie(KEY_COOKIE_ACCESS_TOKEN, {
      expires: dayjs().add(1, 'month').toDate()
    })

    accessCookie.value = JSON.stringify(response)
    user.value = response
  }

  const setUser = (data: User) => {
    user.value = data
  }

  const logout = () => {
    const accessCookie = useCookie(KEY_COOKIE_ACCESS_TOKEN)
    accessCookie.value = ''
    user.value = null
  }

  return {
    error,
    isLoading,
    isAuth,
    user,
    registration,
    login,
    setUser,
    logout
  }
})
