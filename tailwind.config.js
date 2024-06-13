/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background-serch-input': 'rgba(241, 243, 244, .24)',
      },
    },
  },
  plugins: [],
}