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
    themes: [{cupcake: {
      ...require("daisyui/src/theming/themes")["cupcake"],
      info: '#1A1A9F'
    },}, "synthwave"],
    
  },
}
