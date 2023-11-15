module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography')],
  daisyui: {
    themes: ["cupcake", "synthwave"],
    darkTheme: false,
  },
}
