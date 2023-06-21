/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Barlow','sans-serif']
      },
      colors: {
        gray: {
          100:'#ADB5BD',
          500:'#586f7c',
          700:'#889696',
          900:'#2b2c28',
          800:'#433e3f'
        },
        primary:'#E0B000',
        accent: {
          yellow:'#E0B000',
          brown:'#D8C478',
          purple:'#D3CEBA',
          lightpurple:'#ffe16b',
          lightbrown:'#DBBC49'
        }
      },
      boxShadow: {
        error : '0px 8px 24px rgba(216, 118, 105, 0.4)',
        primary : '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top' : '4px 4px 0 #E0E5E7',
        'inverse-bottom' : '4px -4px 0 #E0E5E7'
      }
    },
  },
  plugins: [],
}