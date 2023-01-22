/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sofiasans: ["Sofia Sans"],
      },
      colors: {
        background: "#161212",
        primary: "#fdcd05"
      },
    },
  },
  plugins: [],
};
