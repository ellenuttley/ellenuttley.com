const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
      './src/**/*.{js,jsx,ts,tsx}', // Add paths to your components here
  ],
    content: [
      "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'solway': ['Solway', 'serif'],
        'bungee': ['Bungee', 'cursive'],
        'irene': ['Irene Florentina', 'sans-serif'],
      },
      backgroundImage: {
        'glasses': "url('/src/images/glasses_background.svg')",
      },
       colors: {
        primary: '#E1ACDB',
        secondary: '#280003',
        darkPrimary: '#350444',
        mywhite: '#fefafa',
        lightPurple: '#F9E5FF',
        lightGrey: '#EDECED',
        bardBlack: '#392B41'
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
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}

