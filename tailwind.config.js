const { colors } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'header-gray': '#F1F1F1',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    colors:{
      'plain-gray': "#707070",
    },
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        md: "0rem",
        lg: '4rem',
        '2xl': '0rem',
      },

    },
  },
  variant: {
    lineClamp: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
