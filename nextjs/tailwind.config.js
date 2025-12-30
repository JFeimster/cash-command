/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", 
        secondary: "#0B0F19",
        accent: "#F59E0B",
        "midnight-900": "#0B0F19",
        "midnight-800": "#1F2937",
        whiskey: {
          DEFAULT: '#D4AF37',
          dim: 'rgba(212, 175, 55, 0.1)',
          glow: 'rgba(212, 175, 55, 0.5)',
        }
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        'fade-up': 'fadeInUp 0.8s ease-out forwards',
        blob: "blob 7s infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
