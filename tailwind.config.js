/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Map your current arbitrary colors to named ones
        orangeAccent: '#EB6440',   // was text-[#EB6440]
        purpleAccent: '#8925a8',   // was text-[#8925a8]
        blueAccent: '#4054eb',     // was text-[#4054eb]
        lightBlue: '#B8D5FF',      // rgb(184 213 255)
        grayBlue: '#8897BD',       // #8897BD
        white: '#FFFFFF',           // rgb(255 255 255)
      },
      // Optional: extend gradients if you want
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #262842 0%, #2C497F 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #293961 0%, #8897BD 100%)',
        'dark-gradient': 'linear-gradient(135deg, #2C497F 0%, #293961 100%)',
        'light-gradient': 'linear-gradient(135deg, #E3E4FA 0%, #8897BD 100%)',
      },
    },
  },
  plugins: [],
}
