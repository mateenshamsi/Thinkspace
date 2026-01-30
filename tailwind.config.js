
import defaultTheme from "tailwindcss/defaultTheme";


const config = {
 

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

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
        primary: {
          pink: "#ec4899",
          "pink-dark": "#db2777",
          purple: "#8b5cf6",
          "purple-dark": "#7c3aed",
          lavender: "#c4b5fd",
          "lavender-light": "#ede9fe",
        },
        secondary: {
          blue: "#3b82f6",
          "blue-light": "#93c5fd",
          "blue-dark": "#1d4ed8",
        },
        neutral: {
          dark: "#0f172a",
          "dark-navy": "#020617",
          white: "#ffffff",
          "off-white": "#f8fafc",
          gray: "#64748b",
          "gray-light": "#e5e7eb",
        },
        background: "#ffffff",
        foreground: "#0f172a",
      },
    },
  },

  plugins: [],
};

export default config;
