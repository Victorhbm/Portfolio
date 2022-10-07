/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          to: { transform: 'rotate(-180deg)' }
        },
        smooth: {
          from: { opacity: 0, transform: 'translateY(-30px)' },
          to: { opacity: 1, transform: 'translateY(0px)' },
        }
      },
      animation: {
        rotate: 'rotate .3s ease',
        smooth: 'smooth .3s ease-in-out'
      }
    },
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