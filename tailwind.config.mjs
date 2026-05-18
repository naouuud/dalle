export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        gothic: ["Franklin Gothic", "sans-serif"],
      },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      // },
      // animation: {
      //   marquee: "marquee 10s linear infinite",
      // },
    },
  },
};
