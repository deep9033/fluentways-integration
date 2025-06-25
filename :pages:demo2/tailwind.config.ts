
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        accent: {
          DEFAULT: "#6366f1", // indigo-500 as accent
          soft: "#eef2ff",    // soft bg
          glow: "#c7d2fe",    // for glow effect
        },
      },
      boxShadow: {
        glow: "0 0 18px 3px theme('colors.accent.DEFAULT')",
        "cta-glow": "0 0 0 4px #c7d2fe, 0 0 14px 6px #6366f1bb",
      },
      animation: {
        sheen: "sheen 1.2s linear",
        bouncefast: "bouncefast 0.8s cubic-bezier(.36,.07,.19,.97) both",
        float: "float 6s ease-in-out infinite",
        'fade-up': "fadeUp 0.7s cubic-bezier(.46,.03,.52,.96) both",
      },
      keyframes: {
        sheen: {
          "100%": { left: '120%' }
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(32px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        bouncefast: {
          "0%, 20%, 50%, 80%, 100%": {transform: "translateY(0)"},
          "40%": {transform: "translateY(-12px)"},
          "60%": {transform: "translateY(-5px)"}
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
} satisfies Config;
