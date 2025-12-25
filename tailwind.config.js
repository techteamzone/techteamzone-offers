/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        bg: "#0B0F1A",
        card: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
        primary: "#4F46E5",
        accent: "#22D3EE",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79,70,229,0.35)",
        soft: "0 20px 60px rgba(0,0,0,0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glow: {
          "0%,100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
