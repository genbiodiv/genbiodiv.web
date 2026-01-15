
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        'caribbean-blue': '#006994',
        'deep-sea': '#00334e',
        'sand': '#f5f5dc',
        'jungle-green': '#2e8b57',
      }
    },
  },
  plugins: [],
}
