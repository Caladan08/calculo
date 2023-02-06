/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
      colors: {
        background: "#212020",
        primary: "#fdcd05",
        footer: "#1a1919"
      },
    },
  },
  plugins: [],
};
