/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        skyblue: '#1E88E5',
        custom_gray: '#F5F5F5',
        monthlygray: ' #616161',
        anualgray: ' #BDBDBD'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#FFB400',
          secondary: '#FFA000',
          accent: '#000000',
          'primary-content': 'white',
          'secondary-content': 'white',
          'accent-content': 'white'
        }
      }
    ]
  }
}
