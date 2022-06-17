/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        12: "3rem",
      },
      fontFamily: {
        archy: ["ArchyEDT-Bold", "sans-serif"],
        nino: ["BPG Nino Mkhedruli", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
