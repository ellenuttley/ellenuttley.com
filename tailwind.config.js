const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'glasses': "url('/src/images/glasses_background.svg')"
      },
       colors: {
        primary: '#E1ACDB',
        secondary: '#280003',
        darkPrimary: '#350444',
        darkSecondary: '#280003',
        mywhite: '#fefafa',
        lightPurple: '#F9E5FF'
      }
      
    },
  },
  plugins: [],
}

