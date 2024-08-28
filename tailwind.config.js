/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      boxShadow: {
        'custom-all-sides': '0px 0px 6px 4px rgba(0, 0, 0, 0.5)' 
      },


      colors:{
        'custom-orange': '#FF91A4',
        secondary:"#C08081"

      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}