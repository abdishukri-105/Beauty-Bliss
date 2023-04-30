/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {

    extend: {
      colors: {
        pink: "#f5b9c9",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#6B6868",
        brown: "#ebd4b5	",
        beige: "#debbb2",
        dbrown: "#8f5e4b"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),

  ],
}