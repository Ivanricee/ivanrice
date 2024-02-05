/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "-xl": { max: "1535px" },
      },
      backgroundColor: {
        backImg: "#f1fffb",
      },
      backgroundImage: {
        rock: "url('httpsu://res.cloudinary.com/ivanrice-c/image/upload/q_70/v1706725502/portfolio/imges/bg_noshadow_darker_wbuiy4.webp')",
        "rock-dark":
          "url('https://res.cloudinary.com/ivanrice-c/image/upload/q_70/v1706250878/portfolio/imges/bg_dark_tfdbtw.webp')",
        shadow: "url('/ivanrice/shadow.png')",
      },
      boxShadow: {
        "bg-shadow": "-15px 15px 30px #cee6d8,15px -15px 30px #d9ffee",
        "card-lg": "-6px 6px 12px #b03c3f,6px -6px 12px #de4c4f",
        "card-xl": "-5.5px 10px 14px #c44143,4px -4px 15px #f85154",
        "card-2xl": "-10px 15px 16px #c44143,3px -3px 12px #de4c4f",
      },
      textColor: {
        "card-text": "#e67177",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translate(19px, 10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        "wave-shadow": "wave 4s ease-in-out infinite",
      },
      fontFamily: {
        mauline: ["Mauline", "sans-serif"],
        devina: ["Devina Rodent", "sans-serif"],
      },
      colors: {
        roman: {
          50: "#fdf3f3",
          100: "#fde3e3",
          200: "#fbcdce",
          300: "#f7aaab",
          400: "#f1787a",
          500: "#e64d4f",
          550: "#CF4447",
          600: "#d23032",
          700: "#b12426",
          800: "#922223",
          900: "#7a2223",
          950: "#420d0e",
        },
        ottoman: {
          50: "#ebfff4",
          100: "#ccffe1",
          200: "#9efcca",
          300: "#60f5ae",
          400: "#21e68e",
          500: "#00cd78",
          600: "#00a762",
          700: "#008652",
          800: "#006943",
          900: "#005638",
          950: "#003121",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
