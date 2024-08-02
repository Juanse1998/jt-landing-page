/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ff00aa',
      },
      boxShadow: {
        'pink-medium': '0 4px 6px rgba(255, 0, 170, 0.3), 0 1px 3px rgba(255, 0, 170, 0.2)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow-md': {
            textShadow: '2px 2px 0 rgba(0, 0, 0, 0.5)', // Ajusta el tamaño y el color según sea necesario
          },
        },
        ['responsive', 'hover']
      )
    },
  ],
}
