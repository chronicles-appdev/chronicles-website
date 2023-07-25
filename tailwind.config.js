/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "639px" }, // Small devices (mobile phones, up to 639px)
      md: { max: "800px" }, // Medium devices (tablets, up to 767px)
      lg: { max: "1023px" }, // Large devices (desktops, up to 1023px)
      xl: { max: "1279px" }, // Extra large devices (large desktops, up to 1279px)
      "2xl": { max: "1535px" }, // Custom breakpoint for larger screens (up to 1535px)
    },
    extend: {
      fontFamily: {
        "DM-Sans": ["DM Sans", "sans-serif"],
      },

      colors: {
        royalBlue: "rgba(73, 99, 133, 0.7)",
        otherBlue: "rgba(74, 168, 255, 0.2)",
        otherBlue2: "rgba(179, 214, 251, 0.5)",
      },
    },
  },
  plugins: [],
};
