const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
      './src/**/*.{js,jsx,ts,tsx}', // Add paths to your components here
  ],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'glasses': "url('/src/images/glasses_background.svg')",
      },
       colors: {
        primary: '#E1ACDB',
        secondary: '#280003',
        darkPrimary: '#350444',
        mywhite: '#fefafa',
        lightPurple: '#F9E5FF',
        lightGrey: '#EDECED'
      }
      
    },
  },
  module: {
    rules: [
      {
        test: /\\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [],
}

