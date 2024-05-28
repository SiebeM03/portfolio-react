/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'color-text': "#e5e7eb",
        'color-background': "#171717",
        'color-accent': "#1d4ed8",
        'color-gray': "#555",
      },
      maxHeight: {
        'side-nav': '750px'
      },
      height: {
        '7/10': '70%'
      }
    },
  }
}