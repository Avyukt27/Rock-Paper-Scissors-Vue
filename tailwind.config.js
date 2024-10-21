/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-gray': '0 0 20px #808080',
        'custom-white': '0 0 20px rgb(248 250 252)',
        'custom-blue': '0 0 20px rgb(59 130 246)',
        'custom-replay': '0 0 20px rgb(156 163 175)'
      }
    },
    fontFamily: {
      'custom-sans': 'Helvetica, Arial, sans-serif',
    }
  },
  plugins: [],
}

