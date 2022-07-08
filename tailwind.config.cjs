const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
      }
    },
  },
  plugins: [],
};
