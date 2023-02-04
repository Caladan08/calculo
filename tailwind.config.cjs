/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sofiasans: ["Sofia Sans"],
      },
      colors: {
        background: "#3d3b3b",
        primary: "#fdcd05",
        footer: "#1a1919"
      },
    },
  },
  plugins: [],
};
