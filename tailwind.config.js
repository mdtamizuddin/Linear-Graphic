module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#660FE0",

          "secondary": "#E85D95",

          "accent": "#f497ed",

          "neutral": "#181920",

          "base-100": "#F9F9FB",

          "info": "#8CDAEE",

          "success": "#32E7C6",

          "warning": "#B17B06",

          "error": "#E25A5A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
