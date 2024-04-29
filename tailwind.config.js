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
        light: '#F3E6DE',
        black: '#0D0D0D',
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
        '48-500': ['48px', { fontWeight: '500' }],
        '48-600': ['48px', { fontWeight: '600' }],
        '40-500': ['40px', { fontWeight: '500' }],
        '40-600': ['40px', { fontWeight: '600' }],
        '32-500': ['32px', { fontWeight: '500' }],
        '32-600': ['32px', { fontWeight: '600' }],
        '24-500': ['24px', { fontWeight: '500' }],
        '24-600': ['24px', { fontWeight: '600' }],
        '24-700': ['24px', { fontWeight: '700' }],
        '20-700': ['20px', { fontWeight: '700' }],

        // text
        '18-400': ['18px', { fontWeight: '400' }],
        '18-500': ['18px', { fontWeight: '500' }],
        '18-700': ['18px', { fontWeight: '700' }],
        '16-400': ['16px', { fontWeight: '400' }],
        '16-700': ['16px', { fontWeight: '700' }],
        '16-500': ['16px', { fontWeight: '500' }],
        '16-600': ['16px', { fontWeight: '600' }],
        '14-400': ['14px', { fontWeight: '400' }],
        '14-700': ['14px', { fontWeight: '700' }],
        '12-500': ['12px', { fontWeight: '500' }]
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
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    }
  },
  plugins: []
}
