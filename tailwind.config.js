/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  darkMode: "class",
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      colors: {
        sky: {
          300: '#8ab4f8',
          400: '#4285F4',  // Google blue
          500: '#1a73e8',
          600: '#1967d2',
        },
        emerald: {
          200: '#34A853',
          400: '#34A853',
          500: '#188038',
        },
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
          bg: '#ffffff',
          surface: '#f8f9fa',
          surfaceDark: '#202124',
          text: '#202124',
          textMuted: '#5f6368',
        }
      },
      boxShadow: {
        'google-1': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'google-2': '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
        'google-3': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        'google-4': '0 2px 3px 0 rgba(60,64,67,0.3), 0 6px 10px 4px rgba(60,64,67,0.15)',
      }
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
