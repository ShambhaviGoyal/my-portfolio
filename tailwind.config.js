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
          'transition-duration': '150ms',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
      });

      addUtilities({
        '.transition-bg-2': {
          'transition-property': 'opacity, transform filter',
          'transition-duration': '150ms',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
          },
      });

      addUtilities({
        '.transition-bg-3': {
          'transition-property': 'top, left',
          'transition-duration': '500',
          },
      });
      addUtilities({
        '.transition-bg-4': {
          'transition-property': 'background-color',
          },
      });
    }
  ]
}
