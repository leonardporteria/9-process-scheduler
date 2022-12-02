/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grid': '#0f172a',
        'light-grid': '#131d34',
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
      body: ['Open Sans'],
    },
    plugins: [],
  },
};
