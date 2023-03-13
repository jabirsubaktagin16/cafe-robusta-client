/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d4a373",
          secondary: "#4d908e",
          accent: "#90be6d",
          neutral: "#000000",
          "base-100": "#ffffff",
          "base-200": "#151412",
          "base-300": "#6c584c",
          "base-400": "#fbefe3",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
