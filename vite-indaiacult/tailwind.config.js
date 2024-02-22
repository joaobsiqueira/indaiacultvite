/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
      },
      colors: {
        primary: "#F87060",
        secondary: "#3E8989",
      },
    },
  },
  plugins: [],
};
