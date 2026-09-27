import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        white: "rgb(var(--color-white) / <alpha-value>)",
        slate: {
          50: "rgb(var(--color-slate-50) / <alpha-value>)",
          100: "rgb(var(--color-slate-100) / <alpha-value>)",
          200: "rgb(var(--color-slate-200) / <alpha-value>)",
          300: "rgb(var(--color-slate-300) / <alpha-value>)",
          400: "rgb(var(--color-slate-400) / <alpha-value>)",
          500: "rgb(var(--color-slate-500) / <alpha-value>)",
          600: "rgb(var(--color-slate-600) / <alpha-value>)",
          700: "rgb(var(--color-slate-700) / <alpha-value>)",
          800: "rgb(var(--color-slate-800) / <alpha-value>)",
          900: "rgb(var(--color-slate-900) / <alpha-value>)",
          950: "rgb(var(--color-slate-950) / <alpha-value>)",
        },
        obsidian: {
          950: "rgb(var(--color-obsidian-950) / <alpha-value>)",
          900: "rgb(var(--color-obsidian-900) / <alpha-value>)",
          850: "rgb(var(--color-obsidian-850) / <alpha-value>)",
          800: "rgb(var(--color-obsidian-800) / <alpha-value>)",
          750: "rgb(var(--color-obsidian-750) / <alpha-value>)",
          700: "rgb(var(--color-obsidian-700) / <alpha-value>)",
        },
        forensic: {
          cyan: "#D8B4FE",
          blue: "#EC4899",
          emerald: "#22C55E",
          amber: "#F59E0B",
          rose: "#EF4444",
          violet: "#9333EA",
        }
      },
      fontFamily: {
        mono: ["Geist Mono", "Consolas", "Monaco", "Courier New", "monospace"],
        geist: ["Geist", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        sans: ["Geist", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        grid: "grid 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
