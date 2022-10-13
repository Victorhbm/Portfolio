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
        },
        'linkedin-btn': {
          '0%, 100%': { backgroundImage: "linear-gradient(to top right, #9358F7, #10D7E2)" },
          '12%': { backgroundImage: "linear-gradient(to right, #9358F7, #10D7E2)" },
          '24%': { backgroundImage: "linear-gradient(to bottom right, #9358F7, #10D7E2)" },
          '36%': { backgroundImage: "linear-gradient(to bottom, #9358F7, #10D7E2)" },
          '48%': { backgroundImage: "linear-gradient(to bottom left, #9358F7, #10D7E2)" },
          '60%': { backgroundImage: "linear-gradient(to left, #9358F7, #10D7E2)" },
          '72%': { backgroundImage: "linear-gradient(to top left, #9358F7, #10D7E2)" },
          '84%': { backgroundImage: "linear-gradient(to top, #9358F7, #10D7E2)" },
        },
        'github-btn': {
          '0%, 100%': { backgroundImage: "linear-gradient(to bottom right, #D24074, #6518B4)" },
          '12%': { backgroundImage: "linear-gradient(to bottom, #D24074, #6518B4)" },
          '24%': { backgroundImage: "linear-gradient(to bottom left, #D24074, #6518B4)" },
          '36%': { backgroundImage: "linear-gradient(to left, #D24074, #6518B4)" },
          '48%': { backgroundImage: "linear-gradient(to top left, #D24074, #6518B4)" },
          '60%': { backgroundImage: "linear-gradient(to top, #D24074, #6518B4)" },
          '72%': { backgroundImage: "linear-gradient(to top right, #D24074, #6518B4)" },
          '84%': { backgroundImage: "linear-gradient(to right, #D24074, #6518B4)" },
        },
      },
      animation: {
        rotate: 'rotate .3s ease',
        smooth: 'smooth .3s ease-in-out',
        'linkedin-btn': 'linkedin-btn 1s infinite',
        'github-btn': 'github-btn 1s infinite',
      }
    },
    colors: {
      'dark': '#121212',
      'dark-200': '#151515',
      'light': '#FFFFFF',
      'gray-light': '#C4C4C4',
      'blue': '#00D2DF',
      'pink': '#D24074',
      'purple': '#6518B4',
      'purple-md': '#9358F7',
      'turquoise': '#10D7E2',
    },
    fontFamily: {
      'inter': ['inter', 'sans-serif']
    }
  },
  plugins: [],
}