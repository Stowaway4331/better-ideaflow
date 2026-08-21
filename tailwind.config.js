/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#00c8ce",
          soft: "#7cf5f8",
        },
        violet: {
          DEFAULT: "#6c5ce7",
        },
        ink: {
          DEFAULT: "#030304",
          card: "#0c0c0e",
          border: "#232326",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 200, 206, 0.45)",
        "glow-lg": "0 0 80px -20px rgba(0, 200, 206, 0.5)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
