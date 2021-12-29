const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        gray: {
                 DEFAULT:'#adb5bd',
                 light :'#e9ecef',
                 dark:'#343a40'
              },
        indigo: colors.indigo,
        red:{
              light: '#85d7ff',
              DEFAULT: '#a50a02',
              dark: '#009eeb',
          },
      },
      fontFamily:{
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
   
    container: {
      screens: {
        'xl': '1280px',
        '2xl': '1280px',
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 2px 4px rgb(0 0 0 / 10%)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    textColor: {
      'primary': '#fff',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      gray: {
        DEFAULT:'#adb5bd'
     },
    },

  },

  variants: {
    extend: {},
    container:[]
  },
  plugins: [],
}
