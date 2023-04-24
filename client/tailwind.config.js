/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {

    extend: {
      colors: {
        pink: "#e8a0bf",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#6B6868",
        brown: "#D2B48C"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}