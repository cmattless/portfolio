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
    themes: [
      {
        cupcake: {
      ...require("daisyui/src/theming/themes")["cupcake"],
      "primary": "#A0C4FF",
      "secondary": "#BDB2FF",
      "accent": "#FDFFB6",
      "neutral": "#1a1a9f",
      "base-100": "#FFFFFC",
      "info": "#1a1a9f",
      "success": "#adf7b6",
      "warning": "#FFD6A5",
      "error": "#FFADAD",

      ".menu-active": {
        "background-color": "#1a1a9f",
        "color": "#FFFFFC",
      }
                }}, 
        {synthwave:{
      ...require("daisyui/src/theming/themes")["synthwave"],
      "primary": "#A0C4FF",
      "secondary": "#BDB2FF",
      "accent": "#FDFFB6",
      "neutral": "#1a1a9f",
      "base-100": "#1a103d",
      "info": "#1a1a9f",
      "success": "#adf7b6",
      "warning": "#FFD6A5",
      "error": "#FFADAD",
                }
      }]
    
  },
}
