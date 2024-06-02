/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "border-color": "linear-gradient(90deg, #F85C04 0%, #FFFFFF 100%)",
      },
      backgroundImage: {
        "main-bg": "url('/src/assets/Frame 1618868319.png')",
      },
    },
  },
  plugins: [],
};
