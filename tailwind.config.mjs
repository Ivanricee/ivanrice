/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    //"./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        backImg: "#a9b8b7",
        secondaryBack: "#e67177",
      },
      backgroundImage: {
        "floor-rock":
          "url('https://res.cloudinary.com/ivanrice-c/image/upload/q_61/v1699573269/portfolio/imges/bg_vipxsa.webp')",
        back: "url https://res.cloudinary.com/ivanrice-c/image/upload/c_scale,q_61/v1700278541/portfolio/imges/bg_shadow_low_ddbgdf.png)",
      },
      boxShadow: {
        "bg-shadow": "-15px -15px 30px #909c9c,15px 15px 30px #b4c3be",
        "card-xl": "-5.5px -10px 14px #bcc9c0,4px 4px 15px #dae9da",
        "card-2xl": "-10px -15px 16px #bcc9c0,3px 3px 12px #dae9da",
      },
      textColor: {
        "card-text": "#e67177",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
