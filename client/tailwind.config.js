/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // sm: "640px",
    // => @media (min-width: 640px) { ... }
    // md: "768px",
    // => @media (min-width: 768px) { ... }
    // lg: "1024px",
    // => @media (min-width: 1024px) { ... }
    // xl: "1280px",
    // => @media (min-width: 1280px) { ... }
    // "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
    // "2xl": { max: "1535px" },
    // => @media (max-width: 1535px) { ... }
    // xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }
    // lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }
    // md: { max: "767px" },
    // => @media (max-width: 767px) { ... }
    // sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }
    // sm: { min: "640px", max: "767px" },
    // => @media (min-width: 640px and max-width: 767px) { ... }
    // md: { min: "768px", max: "1023px" },
    // => @media (min-width: 768px and max-width: 1023px) { ... }
    // lg: { min: "1024px", max: "1279px" },
    // => @media (min-width: 1024px and max-width: 1279px) { ... }
    // xl: { min: "1280px", max: "1535px" },
    // => @media (min-width: 1280px and max-width: 1535px) { ... }
    // "2xl": { min: "1536px" },
    // => @media (min-width: 1536px) { ... }
    // },
    // colors: {
    //   // blue: "#1fb6ff",
    //   pink: "#ff49db",
    //   orange: "#ff7849",
    //   green: "#13ce66",
    //   "gray-dark": "#273444",
    //   gray: "#8492a6",
    //   "gray-light": "#d3dce6",
    // },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
    extend: {
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
      // colors: {
      //   valColor: "red",
      //   iykeColor: "#345566",
      //   ifyColor: "rgb(45,30,100)",
      // },
    },
  },
  plugins: [],
};
