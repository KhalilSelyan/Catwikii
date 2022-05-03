module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        montserrat: "Montserrat, 'sans-serif'",
      },
      screens: {
        "3xl": "1900px",
        "4xl": "2500px",
      },
    },
    variants: {},
    plugins: [],
  },
};
