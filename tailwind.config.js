/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blue: '#6c88fa',
        green: '#71ec88',
        white: '#FFFFFF',
        transparentWhite: 'rgba(255, 255, 255, 0.7)',
        gray: '#ADB9C6',
        purple: '#9a74f3',
        red: '#fa7085',
        yellow: '#efc56a',
      },
    },
  },
  plugins: [],
}
