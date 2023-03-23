/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F24F09",
        secondary: "#FFC017",
        dark: "#070E13",
        "grey-text": "#7C7C7C",
        "grey-line": "#CFCFCF",
      },
      fontFamily: {
        gts: ["var(--font-gts)"],
        poppins: ["var(--font-poppins)"],
        ssp: ["var(--font-ssp)"],
      }

    },
  },
  plugins: [],
}
