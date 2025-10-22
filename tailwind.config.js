/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A78BFA", // Your purple
        secondary: "#06B6D4", // Your blue
      },
    },
  },
  plugins: [],
};
