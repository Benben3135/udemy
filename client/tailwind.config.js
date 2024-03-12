/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fonts:{
        custom: ['Montserrat', 'Playfair Display', 'sans', 'serif'],
      },
      colors: {
        Udemygray: {
          600: '#101112',
          550: '#1c1d1f',
          500: '#2d2f31',
          400: '#3e4143',
          300: '#6a6f73',
          250: '#9da3a7',
          200: '#d1d7dc',
          150: '#e4e8eb',
          100: '#f7f9fa',
        },
        Udemyred: {
          500: '#612012',
          400: '#b32d0f',
          300: '#f4522d',
          250: '#ef8e70',
          200: '#fcbca0',
          150: '#fbd5c4',
          100: '#fbece9',
        },
        Udemyblue: {
          500: '#180a3d',
          400: '#371783',
          300: '#5624d0',
          250: '#8072e6',
          200: '#c0c4fc',
          150: '#d8e0fb',
          100: '#eeeffc',
          600: '#cec0fc',
        },
        Udemyindigo: {
          500: '#350c50',
          400: '#7325a3',
          300: '#a435f0',
          250: '#c377f6',
          200: '#e1b8fc',
          150: '#ebd3fc',
          100: '#f6eefc',
        },
        Udemyorange: {
          500: '#4d3105',
          400: '#b4690e',
          300: '#f69c08',
          250: '#ebb152',
          200: '#f3ca8c',
          150: '#f7dfba',
          100: '#fcf5e8',
        },
        Udemyyellow: {
          500: '#3d3c0a',
          400: '#98961b',
          300: '#e9e729',
          250: '#eeec5d',
          200: '#eceb98',
          150: '#f3f2b8',
          100: '#f9f9d7',
        },
        Udemygreen: {
          500: '#113731',
          400: '#1e6055',
          300: '#19a38c',
          250: '#6cb1a5',
          200: '#acd2cc',
          150: '#cfe4e1',
          100: '#f2f7f6',
        },
        Udemypurple: {
          500: '#350c50',
          400: '#7325a3',
          300: '#a435f0',
          250: '#c377f6',
          200: '#e1b8fc',
          150: '#ebd3fc',
          100: '#f6eefc',
          600: '#8710d8'
        },
        Udemywhite: '#fff',
      },
    },
  },
  plugins: [],
}

