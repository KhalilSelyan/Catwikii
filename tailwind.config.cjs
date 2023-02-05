/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        uw: "2200px",
      },
      colors: {
        brownn: "rgba(41, 21, 7, 1)",
      },
    },
  },
  plugins: [],
};
