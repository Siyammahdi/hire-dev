/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "0rem",
      },
      center: true,
      screens: {
        default: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    fontFamily: {
      rajdhani: ["Rajdhani", "sans-serif"],
      sans: ["Work Sans", "sans-serif"],
      raleWay: ["Raleway", "sans-serif"],
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
