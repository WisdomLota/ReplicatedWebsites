/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: { 'fade-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' }, }, }, 
      animation: { 'fade-up': 'fade-up 1s ease-out forwards', },
      colors: {
        'FBA': {
          "purple" : "#4f46e5", 
          'purple-200' : "#7c3aed",
          'purple-100' : "#8b5cf6", 
          'pink-100' : "#ede9fe",
          'pink-200' : "#f5d0fe",
          'blue' : '#c7d2fe',
          'dark-text' : '#27272a'
        }
      
      }
    },
  },
  plugins: [],
}
