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
      backgroundImage: {
        header:
          'linear-gradient( \
          to bottom, \
          #468189, \
          #498b95, \
          #4d95a1, \
          #50a0ad, \
          #53aaba \
        )'
      },
      colors: {
        primary: {
          200: '#5ec5d5',
          500: '#468189',
          800: '#031926'
        },
        secondary: {
          300: '#F4E9CD'
        }
      },
      boxShadow: {
        100: '0 8px 14px 0 rgba(0, 0, 0, 0.2)'
      },
      animation: {
        'text-expand': 'text-expand .8s cubic-bezier(0.215, 0.61, 0.355, 1) both'
      },
      keyframes: {
        'text-expand': {
          '0%': {
            letterSpacing: '-1rem',
            opacity: 0
          },
          '50%': {
            opacity: 0.5
          },
          '100%': {
            opacity: 1
          }
        }
      }
    }
  },
  plugins: []
}
