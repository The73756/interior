export type User = {
  id: number
  name: string
  surname: string
  email: string
}

export type RegistrationParams = {
  name: string
  surname: string
  email: string
  password: string
}

export type LoginParams = {
  email: string
  password: string
}
