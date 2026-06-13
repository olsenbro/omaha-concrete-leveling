import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4F8A",
          dark: "#0F2E52",
        },
        accent: {
          DEFAULT: "#E8730A",
          light: "#F5A04A",
        },
        neutral: "#F7F5F2",
        dark: "#1A1A1A",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-sm": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
