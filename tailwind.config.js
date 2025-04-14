/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        ciel: "#A8DADC", // Bleu Ciel Doux
        sable: "#FFE5B4", // Beige Sable
        blancPur: "#F9F9F9", // Blanc Pur
        nuit: "#1D3557", // Bleu Nuit
        or: "#FFD700", // Or
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
      backgroundColor: ["hover"],
      borderColor: ["hover"],
      boxShadow: ["hover"],
    },
  },
  plugins: [],
};
