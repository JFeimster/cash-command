/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Whiskey Gold
        secondary: "#0B0F19", // Midnight Navy
        accent: "#F59E0B",   // Amber
        "midnight-900": "#0B0F19",
        "midnight-800": "#1F2937",
      },
      animation: {
        ticker: "ticker 30s linear infinite", // The scrolling magic
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};