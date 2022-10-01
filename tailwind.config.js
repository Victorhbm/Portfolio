/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark': '#121212',
      'dark-200': '#151515',
      'light': '#FFFFFF',
      'gray-light': '#C4C4C4',
      'blue': '#00D2DF',
    },
    fontFamily: {
      'inter': ['inter', 'sans-serif']
    }
  },
  plugins: [],
}