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
        myOrange: "#FF5722",
      },
      fontFamily: {
        MyFont: ["Roboto", "sans serif"],
      },
      boxShadow: {
        mainShadow: "1px 29px 73px 3px rgba(0,0,0,0.18)",
      },
      height: {
        cardsHeight: "440px",
      },
    },
  },
  plugins: [],
};
