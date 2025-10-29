/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sageMint: "#ABEDD8",
        sageGreen: "#2F5D50",
        sageHover: "#4C7D6C",
        beige: "#F5E9D2",
        grayText: "#7A7A7A",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
