/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          mdl: '2rem',
          lgl: '3rem',
        },
      },
      fontSize: {
        small: ['14px', '14px'],
        medium: ['16px', '16px'],
        large: ['20px', '24px'],
        xLarge: ['24px', '45px'],
      },
      boxShadow: {
        sidebar: '0px 4px 10px 0px #00000033',
      },
      colors: {
        green: '#88BA52',
        grayLight: '#D9D9D980',
        grayBack: '#E9F1F8',
        grayMedium: '#6F6B7D',
        grayDark: '#344050',
        purple: '#8A22A0',
        red: '#E31B1B',
        blue: '#006AFF',
        blueLight: '#DFEBF4',
        black: '#0F2A43',

      },
      screens: {
        xs: '320px',
        sm: '385px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      margin: {
        section: '40px', // Use with "m-web"
        phone: '40px', // Use with "m-phone"
      },
      fontFamily: {
        Thin: 'IBMPlexSansArabicThin', // 100
        ExtraLight: 'IBMPlexSansArabicExtraLight', // 200
        Light: 'IBMPlexSansArabicLight', // 300
        Regular: 'IBMPlexSansArabicRegular', // 400
        Medium: 'IBMPlexSansArabicMedium', // 500
        SemiBold: 'IBMPlexSansArabicSemiBold', // 600
        Bold: 'IBMPlexSansArabicBold', // 700
      },

    },
  },
  plugins: [],
};