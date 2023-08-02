/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/bg.png')",
      },
      colors: {
        btnColor: "#5D50C6",
        myPink: "#F85E9F",
      },
      fontFamily: {
        MyFont: ["Roboto", "sans serif"],
      },
      boxShadow: {
        mainShadow: "box-shadow: 0px 200px 112px 7px rgba(0,0,0,0.08);",
      },
    },
  },
  plugins: [],
};
