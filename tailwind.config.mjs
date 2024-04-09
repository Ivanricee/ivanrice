/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "-xl": { max: "1535px" },
        "-md": { max: "767px" },
      },
      backgroundColor: {
        backImg: "#ebfff4",
      },
      backgroundImage: {
        rock: "url('httpsu://res.cloudinary.com/ivanrice-c/image/upload/q_70/v1706725502/portfolio/imges/bg_noshadow_darker_wbuiy4.webp')",
        "rock-dark":
          "url('https://res.cloudinary.com/ivanrice-c/image/upload/q_70/v1706250878/portfolio/imges/bg_dark_tfdbtw.webp')",
        shadow: "url('/ivanrice/shadow.avif')",
        "gradient-card": "linear-gradient(225deg, #4752bd, #4e5cd4)",
        "gradient-card-b": "linear-gradient(225deg, #4554cc, #5c64d9)",
      },
      boxShadow: {
        container: "-15px 15px 30px #cee6d8,15px -15px 30px #D1FFEA",
        "card-lg": "-0.5px 3px 10px #4354bb,0px 3px 10px #475cdd",
        "card-xl": "-13px 17px 23px #3d44b3, 5px -5px 28px #4b61ea",
        /*"card-2xl": "-10px 15px 16px #bd3d3f,3px -3px 12px #d3393c",*/
        link: "0px -4px 36px 0px #C0CEB24A inset",
      },
      textColor: {
        "card-text": "#e67177",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInBounce: {
          "0%": { opacity: "0%", transform: "scale(0.99)" },
          "50%": { opacity: "50%", transform: "scale(1.002)" },
          "100%": { opacity: "100%", transform: "scale(1)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translate(34px, 10px)" },
          "100%": { transform: "translateX(2px)" },
        },
        reveal: {
          from: {
            opacity: "0",
            translate: "0 100px",
          },
          "50%": {
            opacity: "0.1",
          },
          to: {
            opacity: "1",
            translate: "0 0",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        fadeInBounce: "fadeInBounce 0.3s ease-in-out",
        reveal: "reveal",
        "wave-shadow": "wave 2.8s ease-in-out infinite",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: view())",
      },
      fontFamily: {
        mauline: ["Mauline", "sans-serif"],
        biryani: ["Biryani", "sans-serif"],
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
          650: "#BF4345",
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
        "green-lime": {
          50: "#FDFFF5",
          100: "#FBFFEB",
          200: "#F4FCD4",
          300: "#EDF8C3",
          400: "#E5F2B5",
          500: "#DAE8A9",
          600: "#CAE567",
          700: "#BCE623",
          800: "#92B70B",
          900: "#647F00",
          950: "#485C00",
        },
        "american-blue": {
          50: "#F0F1FA",
          100: "#E0E2F5",
          200: "#C2C6EB",
          300: "#A3A9E0",
          400: "#858DD6",
          500: "#6670CC",
          550: "#5368E7",
          600: "#4955C2",
          650: "#4852C2",
          700: "#3843A8",
          800: "#2D3686",
          900: "#212863",
          950: "#1B2050",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
