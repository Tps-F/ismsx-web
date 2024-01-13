/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#EF3352',
      secondary: '#FCE9D7',
      line: '#F1E2C3',
      about: '#35A4BC',
      works: '#909326',
      textbg: "#F9D0AA",
      contacttextbg: "#eed1b4"
    },
    extend: {
      fontFamily : {
        caviardreams: 'CaviarDreams',
        HeiseiKakuGothic: 'HeiseiKakuGothic'
      },
      spacing: {
        '1': '1px' 
      }
    },
  },
  plugins: [],
}
