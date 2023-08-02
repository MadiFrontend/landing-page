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
    },
  },
  plugins: [],
};
