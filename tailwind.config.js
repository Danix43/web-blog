/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          200: "#FEFAE0",
          300: "#FAEDCD",
          400: "#FBF0D7",
          800: "#FFDB83",
          900: "#FFE29B",
          950: "#FFCE55",
        },
      },
    },
  },
  plugins: [],
};
