/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'header': '1200px',
        'bg-lines': '1140px',
      },
      height: {
        'header': '102px',
      },
      margin: {
        'header': '50px',
      },
      borderRadius: {
        'header': '136px',
      },
      colors: {
        "primary-default": "#9264F8",
        "secondary-cyan": "#00EEFD",
        black: "#000000",
        'header-bg': '#1B1B1BCC',
        'dark-lg': '#0E0E0E',
        'dark-md': '#151516',
      },
      backgroundImage: {
        "vision-bg-mobile": "url('../public/images/vision_bg_mobile.svg')",
        "vision-bg": "url('../public/images/vision_bg.svg')",
        "vision-bg-tablet": "url('../public/images/vision_bg_tablet.svg')",
        L2: "url('../public/images/L2.svg')",
        L3: "url('../public/images/L3.svg')",
        L5: "url('../public/images/L5.svg')",
        L6: "url('../public/images/L6.svg')",
        L7: "url('../public/images/L7.svg')",
        web: "url('../public/images/home/left_web.svg')",
        "feature-line": "url('../public/images/features/feature_line_1.svg')",
      },
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Georgian: ["Noto Sans Georgian", "Noto Sans Georgian"],
    },
  },
  plugins: [],
};
