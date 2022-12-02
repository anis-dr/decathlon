/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "decathlon": {
          "50": "#e8f3f9",
          "100": "#d0e6f3",
          "200": "#a1cde7",
          "300": "#72b4da",
          "400": "#439bce",
          "500": "#1482c2",
          "600": "#10689b",
          "700": "#0c4e74",
          "800": "#08344e",
          "900": "#041a27"
        }
      }
    },
  },
}
