/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'hero-bg-img': "url('/assets/hero-car.jpg')"
        }
    },
  },
  plugins: [],
}

