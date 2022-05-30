module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      widest: "0.2em",
    },
    extend: {
      content: {
        link: 'url("assests/Check.svg")',

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
