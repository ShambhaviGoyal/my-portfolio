/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#14213D',
          light: '#1b2d52',
        },
        surface: '#E5E5E5',
        'surface-card': '#EFEFEF',
        muted: '#5A6377',
        accent: '#E07B39',
        'accent-light': '#F0A060',
      },
    },
  },
  plugins: [],
}
