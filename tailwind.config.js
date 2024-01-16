/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'hero-bg-img': "url('/assets/hero-car.jpg')",
            'contact-bg': 'linear-gradient(133deg, #87cefa 0%, #6495ed 100%)'
        }
    },
  },
  plugins: [],
}

