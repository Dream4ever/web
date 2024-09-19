/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '25': '100px',
        '50': '200px',
      },
      width: {
        'header': '1200px',
        'bg-lines': '1140px',
        'feature-list': '531px',
        'section-header': '729px',
        'button': '300px',
      },
      height: {
        'header': '102px',
      },
      margin: {
        'header': '50px',
      },
      borderRadius: {
        '4xl': '32px',
        'header': '136px',
        'section': '100px',
      },
      colors: {
        "primary-default": "#9264F8",
        "secondary-cyan": "#00EEFD",
        black: "#000000",
        'primary-light': '#B882FF',
        'primary-dark': '#6646AE',
        'header-bg': '#1B1B1BCC',
        'dark-lg': '#0E0E0E',
        'dark-md': '#151516',
        'dark-base': '#262429',
        'bg-card-from': '#3F3949',
        'bg-card-to': '#2E2E31',
        'bg-card-primary-from': '#A663EE',
        'bg-card-primary-to': '#643695',
        'gray-base': '#D9D9D9',
        'gray-light': '#AAAAAA',
        'gray-light2': '#2D2947',
        'gray-light3': '#4C4266',
      },
      fontSize: {
        '2.5xl': '28px',
        '4.5xl': '40px',
      },
      backgroundImage: {
        'index-s1-bg': "url('../public/assets/main_v3/bg-curve-top.png')",
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
      zIndex: {
        'max': '99999',
      },
    },
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Georgian: ["Noto Sans Georgian", "Noto Sans Georgian"],
    },
  },
  plugins: [],
};
