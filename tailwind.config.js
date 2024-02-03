/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gray500: "#BBBBBB",
      gray600: "#E6E6E6",
      green: "#25D366",
      darkGray: "#4D4D4D",
      white: "#FFFFFF",
      BMWblue: "#1C69D4",
      text: "#262626",
      hover: "#0653B6",
      gray666: "#666666",
      black: "#000000",
      width: {
        '165': '165px',
        '1920': '1920px',
      },
      height:{
        '43': '43px',
        '383': '383px',
      },
      fontSize: {
        'btn-text-link': '14px',
      },
    },
  },
  plugins: [],
}

