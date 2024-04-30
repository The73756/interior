import { apiInstance } from '@/api/instance'
import { LoginParams, RegistrationParams, User } from '@/api/services/auth/type'

export const registrationService = (params: RegistrationParams) => {
  return apiInstance<User>('/users', {
    method: 'POST',
    body: params
  })
}

export const loginService = (params: LoginParams) => {
  return apiInstance<User>('/login', {
    method: 'POST',
    body: params
  })
}
