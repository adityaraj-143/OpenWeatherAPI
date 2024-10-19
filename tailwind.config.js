/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skyblue': 'rgba(131, 180, 255,0.5)',
        'lightblue': 'rgba(224,244,255,0.6)',
        'darkblue': 'rgba(8, 116, 175, 0.7)'
      }
    },
  },
  plugins: [],
}