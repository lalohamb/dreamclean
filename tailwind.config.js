/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:      "#70B9F5",
          pink:      "#F42D88",
          "soft-pink": "#FFE5F0",
          "ice-blue":  "#EFF8FF",
          charcoal:  "#263445",
        },
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "sans-serif"],
        body:    ["var(--font-inter)",   "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem,5vw,4rem)",   { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3rem)",      { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem,3vw,2.25rem)", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        card:       "0 2px 16px 0 rgba(38,52,69,0.07)",
        "card-hover":"0 8px 32px 0 rgba(38,52,69,0.13)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [],
};
