// https://nuxt.com/docs/api/configuration/nuxt-config
import svg from '@neodx/svg/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/eslint-module', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/google-fonts'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  googleFonts: {
    stylePath: 'assets/google-fonts.css',
    outputDir: 'assets',
    preload: true,
    families: {
      Nunito: {
        wght: '200..900'
      }
    }
  },
  vite: {
    $client: {
      plugins: [
        svg({
          root: 'assets/icons',
          group: true,
          output: 'public/sprites',
          metadata: {
            path: 'types/icon/sprite.gen.ts',
            runtime: {
              size: true,
              viewBox: true
            }
          },
          resetColors: {
            exclude: ['assets/icons', /[a-z]*-colored\.svg$/],
            replaceUnknown: 'currentColor'
          }
        })
      ]
    }
  },
  components: {
    dirs: [] // off auto import for components
  }
})
