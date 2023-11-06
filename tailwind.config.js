/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,vue,js,ts}", "./app.vue"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
