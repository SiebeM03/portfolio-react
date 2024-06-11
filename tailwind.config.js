/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'color-text': "#e5e7eb",
        'color-background': {
          DEFAULT: '#1c1c1c',
          '50': '#383838',
          '100': '#323232',
          '200': '#2D2D2D',
          '300': '#272727',
          '400': '#222222',
          '500': '#1C1C1C',
          '600': '#171717',
          '700': '#141414',
          '800': '#111111',
          '900': '#0E0E0E',
          '950': '#0C0C0C',
        },
        'color-accent': "#1d4ed8",
        'color-gray': "#555",
      },
      maxHeight: {
        'side-nav': '750px',
      },
      height: {
        '7/10': '70%'
      }
    },
  }
}