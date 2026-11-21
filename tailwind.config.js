/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aethelgard: {
          bg: '#141313',
          canvas: '#0E0E0E',
          card: '#1C1B1B',
          cardAlt: '#201F1F',
          cardHover: '#252424',
          platinum: '#D4C4B5',
          platinumFixed: '#F1E0D0',
          platinumMuted: '#B5A596',
          platinumBorder: 'rgba(212, 196, 181, 0.22)',
          emerald: '#2EE59D',
          emeraldMuted: 'rgba(46, 229, 157, 0.15)',
          emeraldBorder: 'rgba(46, 229, 157, 0.35)',
          coral: '#EA4335',
          coralMuted: 'rgba(234, 67, 53, 0.15)',
          coralBorder: 'rgba(234, 67, 53, 0.35)',
          gold: '#E5A93C',
          goldMuted: 'rgba(229, 169, 60, 0.15)',
          goldBorder: 'rgba(229, 169, 60, 0.35)',
          text: '#E5E2E1',
          textMuted: '#968F92',
          textDim: '#6E696B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Comfortaa', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
