/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'secondColor': '#DF6E47',
        'minuteColor': '#F5AEDD',
        'hourColor': '#90C280',
        'dayColor': '#FDDE56',
      },
    },
    // fontSize: {
    //   'innerveSize':'15rem'
    // }
  },
  plugins: [],
}

