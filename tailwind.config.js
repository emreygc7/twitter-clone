/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '87' : "22rem"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: '#1DA1F2',
      black: 'rgba(20, 23, 26, 1) ',
      hoverBlack: 'rgba(20, 23, 26, .9)',
      darkgray: '#657786',
      lightgray : '#aab8c2',
      extralg: '#E1E8ED',
      x2lightgray: "#F5F8FA",
      white: '#ffffff',
      green: '#00ba7c',
      pink: '#f91880'
    }
  },
  plugins: [],
}
