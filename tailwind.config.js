/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Where Tailwind looks for classes to purge (compile/optimize)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path if your components are elsewhere
  ],
  
  theme: {
    extend: {
      // Define the keyframes for the continuous scroll effect
      keyframes: {
        'scroll-left': {
          // Starts at position 0 (visible)
          '0%': { transform: 'translateX(0)' },
          // Ends at position -100% (hidden, which is where the duplicate content starts)
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-right': {
          // Starts at -100% (hidden, where the duplicate content ends)
          '0%': { transform: 'translateX(-100%)' },
          // Ends at 0% (visible)
          '100%': { transform: 'translateX(0)' },
        },
      },
      // Apply the keyframes to create reusable animation utilities
      animation: {
        // Linear means constant speed. Infinite means it loops forever.
        'scroll-left': 'scroll-left 40s linear infinite', // Adjust '40s' for speed
        'scroll-right': 'scroll-right 40s linear infinite', // Adjust '40s' for speed
      },
      
      // Since your Footer used 'blue-400' as an accent color, we'll ensure that's available.
      colors: {
        'blue-400': '#60a5fa',
      }
    },
  },
  
  plugins: [],
}