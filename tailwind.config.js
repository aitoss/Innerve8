/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondColor': '#DD6843',
        'minuteColor': '#F5AEDD',
        'hourColor': '#61D290',
        'dayColor': '#61D290',
      },
    },
    // fontSize: {
    //   'innerveSize':'15rem'
    // }
  },
  plugins: [],
}

