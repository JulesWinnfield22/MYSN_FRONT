module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx}',],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#562875'
        },
        'dark-blue': '#202c39',
        'light-blue': '#283845',
        'lighter-blue': '#4da8da',
        'sage': '#b8b08d',
        'deep-champagne': '#f2d492',
        'dark-blue-shadow': '#203647',
        'light-blue-shadow': '#eeefbfb',
        'gray-550': '#ddd'
      },
      fontFamily: {
        'montserrat': 'Montserrat, sans-serif'
      },
      boxShadow: {
        'dark': '0 0 5px -2px #000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
