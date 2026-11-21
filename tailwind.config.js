/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#1A73E8',
          blueHover: '#1557B0',
          blueLight: '#E8F0FE',
          red: '#D93025',
          redLight: '#FCE8E6',
          green: '#1E8E3E',
          greenLight: '#E6F4EA',
          yellow: '#F9AB00',
          yellowLight: '#FEF7E0',
          greyDark: '#202124',
          greyBody: '#5F6368',
          greyLight: '#F8F9FA',
          border: '#E8EAED',
        }
      },
      fontFamily: {
        sans: ['Google Sans', 'Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
