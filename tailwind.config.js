

import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Primary brand colors
        primary: {
          pink: "var(--primary-pink)",
          "pink-dark": "var(--primary-pink-dark)",
          purple: "var(--primary-purple)",
          "purple-dark": "var(--primary-purple-dark)",
          lavender: "var(--primary-lavender)",
          "lavender-light": "var(--primary-lavender-light)",
        },
        // Secondary colors
        secondary: {
          blue: "var(--secondary-blue)",
          "blue-light": "var(--secondary-blue-light)",
          "blue-dark": "var(--secondary-blue-dark)",
        },
        // Neutral colors
        neutral: {
          dark: "var(--neutral-dark)",
          "dark-navy": "var(--neutral-dark-navy)",
          white: "var(--neutral-white)",
          "off-white": "var(--neutral-off-white)",
          gray: "var(--neutral-gray)",
          "gray-light": "var(--neutral-gray-light)",
        },
        // Background and Foreground from global CSS variables
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;