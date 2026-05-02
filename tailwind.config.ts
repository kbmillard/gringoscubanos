import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0f1114",
        cream: "#f4efe4",
        tortilla: "#e8dcc4",
        salsa: "#8B1538",
        ember: "#c2412c",
        "cuban-red": "#b91c3c",
        navy: "#0B1426",
        midnight: "#060b14",
        gold: "#e8b84a",
        sand: "#d4c4a8",
        teal: "#2d6a6e",
        agave: "#2d6a6e",
        cocoa: "#3d2a1f",
        plum: "#1a1520",
        "menu-plum": "#121a28",
        "accent-cyan": "#5eead4",
        "accent-green": "#4ade80",
        "accent-yellow": "#facc15",
        "accent-pink": "#fb7185",
        "accent-orange": "#fb923c",
        "accent-red": "#f87171",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
