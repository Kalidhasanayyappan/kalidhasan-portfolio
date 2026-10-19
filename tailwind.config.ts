import type { Config } from "tailwindcss";

// All colours come from CSS variables in globals.css, so both themes share one set of classes.
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--background)",
        surface: "var(--surface)",
        sunken: "var(--surface-2)",
        fg: "var(--foreground)",
        muted: "var(--muted)",
        line: "var(--border)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
