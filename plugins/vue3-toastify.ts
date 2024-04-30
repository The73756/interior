import Vue3Toastify, { toast, ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// https://vue3-toastify.js-bridge.com/
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 5000,
    hideProgressBar: true,
    position: 'bottom-right'
  } as ToastContainerOptions)

  return {
    provide: { toast }
  }
})
