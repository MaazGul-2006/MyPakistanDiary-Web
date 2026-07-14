/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pakistan: {
          green: '#0a6b3f',
          lightGreen: '#00a86d',
          darkGreen: '#055033'
        }
      }
    },
  },
  plugins: [],
}
