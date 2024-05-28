/** @type {Plugin} */
const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});

const transformZ = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
      {
        'translate-z': (value) => ({
          '--tw-translate-z': value,
          transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
        }), // this is actual CSS
      },
      { values: theme('translate'), supportsNegativeValues: true }
  )
});

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
    },
  },
  plugins: [backfaceVisibility, transformZ],
}