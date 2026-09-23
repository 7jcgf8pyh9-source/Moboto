/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#111214",
          800: "#1b1d21",
          700: "#2a2d33",
          600: "#3f434b",
          500: "#5b606a",
          400: "#7d828c",
          300: "#a4a8b0",
          200: "#c9ccd1",
          100: "#e6e8eb",
          50: "#f4f5f6",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
