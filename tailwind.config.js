/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-bg": "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
        "financial-bg": "url('./assets/img/financial_service.jpg')",
      },
    },
  },
  plugins: [],
};
