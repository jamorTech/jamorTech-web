/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        arimoFont: ['arimoFont', 'sans-serif'],
        abrilFont: ['abrilFont', 'sans-serif'],
      },
      colors: {
        customGreen: '#004514',
        customGray: '#231F20',
        customPitch: '#E0DAF2',
        customPurple: '#240076',
        serviceGray: ' #F5F5F5' 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
