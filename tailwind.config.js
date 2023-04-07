module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // Input Font Families (Themes) in Tailwind Config
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
