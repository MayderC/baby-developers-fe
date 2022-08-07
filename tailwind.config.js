/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#4B0081",
        "purple-two": "#7F00B2",
        white: "#fff",
        rosadito: "#EBB2FF",
        azulito: "#e7eeff",
        card: "rgba(255, 255, 255, 0.36)",
        moradito: "#f2e6ff",
        oscurito: "#18171E",
        rosa: "#e258e8",
        celestito: "#1ac5fc",
      },
      borderRadius: {
        card: "15px",
      },

      borderWidth: {
        3: "3px",
      },
      boxShadowColor: {
        sombrita: "box-shadow: #272727a6 3px 3px 15px;",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      padding: {
        "p-10": "2.5rem",
      },
    },
  },
  plugins: [],
};
