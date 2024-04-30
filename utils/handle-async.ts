import { Ref } from 'vue'
import { toast } from 'vue3-toastify'
import { Response } from '@/api/instance'

const updateLoading = (value: boolean, loadingProps?: Ref<boolean>) => {
  if (loadingProps) {
    loadingProps.value = value
  }
}

const updateError = (value: string, errorProps?: Ref<string>, showErrorToast = true) => {
  if (errorProps) {
    errorProps.value = value

    if (value) {
      console.error('[handleAsync]', errorProps.value)
      if (typeof window !== 'undefined' && showErrorToast) {
        toast.error(errorProps.value || 'Произошла неизвестная ошибка!')
      }
    }
  }
}

export const handleAsync = async <T>(
  promiseFunction: () => Response<T>,
  loadingProps?: Ref<boolean>,
  errorProps?: Ref<string>
): Promise<{ error: string | null; response: T | null }> => {
  try {
    updateLoading(true, loadingProps)
    updateError('', errorProps)

    const { data, error } = await promiseFunction()

    if (error.value?.data) {
      const errorMessage = error.value.data.message

      updateError(errorMessage, errorProps)
      return { error: errorMessage, response: data.value }
    }

    return { error: null, response: data.value }
  } catch (error) {
    console.error(error)

    return { error: '', response: null }
  } finally {
    updateLoading(false, loadingProps)
  }
}
