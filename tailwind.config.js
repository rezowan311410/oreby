/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container:"1604px",
      },
      fontFamily: {
        dm:["DM Sans", "sans-serif"],
        
      },
      colors: {
        primarycolor: '#262626',
        whitecolor:"#f5f5f5",
      },
    },
  },
  plugins: [],
}
