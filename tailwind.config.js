/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background-serch-input': 'rgba(241, 243, 244, .24)',
        'menu-hamburger-hover': 'rgba(60,64,67,.08)',
      },
      fontFamily: {
        'roboto': 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}