/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darKMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      colors: {
        primaryColor: '#FFFFFF',
        secondaryColor: '#FCF8F3',
        accentColor: '#77966D',
        accentDarkColor: '#626D58',
        basicColor: '#000000',
        addotionalColor: '#F4F5F7',
        grayLColor: '#3A3A3A',
        grayMColor: '#898989',
        graySColor: '#B0B0B0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        base: '1rem',
        h5: '1.25rem',
        h4: '1.5rem',
        h3: '2rem',
        h2: '3.25rem',
      },
      padding: {
        sm: '25px',
        big: '100px',
        btnX1: '25px',
        btnY1: '72px',
        btnX2: '12px',
        btnY2: '82px',
      },
      margin: {
        esm: '25px',
        sm: '30px',
        md: '60px',
        big: '80px',
      },
      borderRadius: {
        r: '10px',
      },
    },
  },
  plugins: [],
};
