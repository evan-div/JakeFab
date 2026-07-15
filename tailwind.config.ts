import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm concrete / paper — primary light surface
        concrete: {
          50: "#F7F4EF",
          100: "#F1EDE6",
          200: "#E6E0D6",
          300: "#D5CCBE",
        },
        // Blackened steel — primary dark surface + text
        steel: {
          950: "#0D0C0B",
          900: "#131211",
          800: "#1C1A18",
          700: "#2A2724",
          600: "#3A3631",
          500: "#57524B",
          400: "#7A736A",
          300: "#A49C90",
        },
        // Brushed aluminum neutrals
        aluminum: {
          100: "#E9E7E3",
          200: "#D2CFC9",
          300: "#B3AFA8",
        },
        // Restrained copper / rust accent — used sparingly
        copper: {
          400: "#C97A4A",
          500: "#B15A34",
          600: "#95492A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        container: "80rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(320%) skewX(-12deg)" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.4s ease forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
