module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      widest: "0.2em",
    },

    extend: {
      screens: {
        custom: "1180px",
        // => @media (min-width: 1180px) { ... }
      },
      content: {
        link: 'url("assests/Check.svg")',
        headerBg: 'url("assests/title-bg.png")',

        blackCheck: 'url("assests/black_entypo_check.svg")',
        greenCheck: 'url("assests/green_entypo_check.svg")',
        feature: 'url("assests/middle.svg")',
      },
      backgroundImage: {
        "price-plan": "url('assests/pricing.png')",
      },
    },
  },
  plugins: [],
};
