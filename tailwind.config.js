/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '768px',
        md: '1024px',
        lg: '1440px'
      },
      colors: {
        primary: {
          200: '#5ec5d5',
          500: '#468189'
        },
        secondary: {
          300: '#F4E9CD'
        }
      }
    }
  },
  plugins: []
}
