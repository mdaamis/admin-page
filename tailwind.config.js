/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
      '71': '15.5rem',
      '21':'5.3rem',
     }},
     colors:{
      gray:{
        light:'#f7f8fa',
      },
      blue:{
        light:'#8dace4',
      },

     },
    
  },
  plugins: [],
}