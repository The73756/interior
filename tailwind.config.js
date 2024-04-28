/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F2B441',
        beige: '#BF8563',
        green: '#70731A',
        brown: {
          DEFAULT: '#59280B',
          red: '#A63C24'
        },
        grey: {
          DEFAULT: '#A6948A',
          brown: '#73574D'
        }
      },
      fontSize: {
        // headers
        '48-500': ['48px', { fontWeight: '500', lineHeight: 'auto' }],
        '48-600': ['48px', { fontWeight: '600', lineHeight: 'auto' }],
        '40-500': ['40px', { fontWeight: '500', lineHeight: 'auto' }],
        '40-600': ['40px', { fontWeight: '600', lineHeight: 'auto' }],
        '32-500': ['32px', { fontWeight: '500', lineHeight: 'auto' }],
        '32-600': ['32px', { fontWeight: '600', lineHeight: 'auto' }],
        '24-500': ['24px', { fontWeight: '500', lineHeight: 'auto' }],
        '24-600': ['24px', { fontWeight: '600', lineHeight: 'auto' }],

        // text
        '18-400': ['18px', { fontWeight: '400', lineHeight: 'auto' }],
        '18-700': ['18px', { fontWeight: '700', lineHeight: 'auto' }],
        '16-400': ['16px', { fontWeight: '400', lineHeight: 'auto' }],
        '16-700': ['16px', { fontWeight: '700', lineHeight: 'auto' }],
        '14-400': ['14px', { fontWeight: '400', lineHeight: 'auto' }],
        '14-700': ['14px', { fontWeight: '700', lineHeight: 'auto' }]
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      },
      screens: {
        '2xl': '1536px',
        'xl': '1440px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xsm': '360px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      },
      borderRadius: {
        5: '20px'
      }
    }
  },
  plugins: []
}
