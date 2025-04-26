/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'br1-1170': { 'max': '1169px' },
        'br2-900': { 'max': '899px' },
        'br3-800': { 'max': '799px' },
      },
    },
  },
  plugins: [],
}

