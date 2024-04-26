
/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
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
        'calistoga': ['Calistoga', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
        'spectral': ['Spectral', 'sans-serif'],
      },
      backgroundImage: {
        'glasses': "url('/src/images/glasses_background.svg')",
      },
       colors: {
        primary: '#E1ACDB',
        primaryPurple: '#61087F',
        // secondary: '#280003',
        secondary: '#1B0C2C',
        transition: '#CACBCC',
        darkPrimary: '#350444',
        mywhite: '#fefafa',
        myblack: '#1B0C2C',
        lightPurple: '#F2ECFF',
        lightGrey: '#EDECED',
        bardBlack: '#392B41',
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
  plugins: [
    require('@tailwindcss/typography'),
    require("tw-elements-react/dist/plugin.cjs"),
    require('tailwindcss/colors')
  ]
}

