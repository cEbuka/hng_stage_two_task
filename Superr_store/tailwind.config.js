/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-black-1': '#0C0C0C',
        'app-bg': '#FFFFFF',
        'app-orange': "#FF4B39",
        'app-black-2': "#0D0D15",
        'app-nav-bg': "#00A6DB",
        'hero-bg': "#010101"
      },
    },
  },
  plugins: [],
}

