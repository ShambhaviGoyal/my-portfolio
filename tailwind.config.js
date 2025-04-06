/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindScrollbar, 
    function({ addUtilities }) {
      addUtilities({
        '.transition-bg': {
          'transition-property': 'transform, background-color',
          
        },
      });

      addUtilities({
        '.transition-bg-2': {
          'transition-property': 'transform, filter, opacity',
          },
      });

      addUtilities({
        '.transition-bg-3': {
          'transition-property': 'top, left',
          'transition-duration': '500',
          },
      });
    }
  ]
}
