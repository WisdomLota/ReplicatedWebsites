/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: { 
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' }, },
        'slide-in-left': { '0%': { transform: 'translateX(-80%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' }, }, 
        'slide-in-right': { '0%': { transform: 'translateX(80%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' }, }, 
        'slide-up': { '0%': { transform: 'translateY(100%)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' }, },
      }, 
      animation: { 
        'fade-up': 'fade-up 1s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards', 
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
        'slide-up': 'slide-up 1s ease-out forwards',
       },
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
