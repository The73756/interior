import { AsyncData } from 'nuxt/app'
import { FetchError } from 'ofetch'
import { KEY_COOKIE_ACCESS_TOKEN } from '@/constants/keys'

export type Request<T> = Parameters<typeof useFetch<T>>[0]
export type Options<T> = Parameters<typeof useFetch<T>>[1]
export type Response<T> = AsyncData<T, FetchError>

export const apiInstance = <T>(request: Request<T>, opts?: Options<T>): Response<T> => {
  const accessToken = useCookie(KEY_COOKIE_ACCESS_TOKEN).value
  const config = useRuntimeConfig()

  const options: Options<T> = {
    baseURL: config.public.baseURL,
    ...opts,
    headers: {
      'Authorization': accessToken ? `Bearer ${accessToken}` : '',
      'Access-Control-Allow-Origin': '*',
      ...opts?.headers
    }
  }

  return useFetch<T>(request, options) as Response<T>
}
