/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-grid': '#151f37',
        'light-grid': '#192643',
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
      body: ['Open Sans'],
    },
    plugins: [],
  },
};
