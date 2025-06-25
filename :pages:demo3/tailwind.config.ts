import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'dm-serif': ['DM Serif Display', 'serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#4A6CF7', // new vibrant blue
          foreground: '#fff'
        },
        accent: {
          DEFAULT: '#e6eefc', // supporting light blue for backgrounds
          foreground: '#243151',
        },
        muted: {
          DEFAULT: '#f3f7fd', // extra soft blue for muted/fill states
          foreground: '#4b5563'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        brand: {
          DEFAULT: '#4A6CF7', // brand blue, matches primary
        },
        success: { DEFAULT: "#22c55e" }
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      boxShadow: {
        card: "0 4px 32px rgba(74,108,247,0.06), 0 1.5px 8px rgba(74,108,247,0.05)"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.7s cubic-bezier(.4,0,.2,1)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
