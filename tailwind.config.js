/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      colors: {
        // Warm stone monochrome + a single burnt-orange accent.
        theme: {
          bg: "#faf9f7", // warm paper
          surface: "#ffffff",
          text: "#1c1917", // stone-900
          muted: "#57534e", // stone-600
          border: "#e7e5e4", // stone-200
          accent: "#c2410c", // burnt orange (orange-700)
          accentHover: "#9a3412", // orange-800
        },
        themeDark: {
          bg: "#0c0a09", // stone-950
          surface: "#1c1917", // stone-900
          text: "#fafaf9", // stone-50
          muted: "#a8a29e", // stone-400
          border: "#292524", // stone-800
          accent: "#fb923c", // orange-400
          accentHover: "#fdba74", // orange-300
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28, 25, 23, 0.04), 0 4px 16px -8px rgba(28, 25, 23, 0.12)",
        lift: "0 12px 40px -16px rgba(28, 25, 23, 0.25)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
