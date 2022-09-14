/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        dark: {
          'icon': '#3c342c',
          'border': 'rgb(0,0,0, 0.125)',
          'd1000': '#1f1f1f',
          'd800': '#494949',
          'd400': '#6d6d6d',
          'd200': '#7f7f7f',
          'd100': '#ddd',
        },
        light: {
          DEFAULT: '#fafafa',
          l200: '#e4e5f1',
        },
        gray: {
          light: '#F2F2F6',
          DEFAULT: '#DDDDDD',
          dark: '#3A3A3A',
          lightest: '#F6F6F9',
          lighting: '#F9F8F8',
          original: '#72849C',
          cm: '#888C9D',
          neutrals: '#8D8383',
          n300: '#F5F2F2',
          n400: '#E9E6E6',
          n500: '#DCD7D7',
          n600: '#C9C2C2',
          n700: '#8D8383',
          n800: '#2F2826',
        },
        orange: {
          DEFAULT: '#FFAA45',
          dark: '#EC9B3A',
          honey: '#FDA94F !important',
          blush: "#FFF2E3",
          carrot: "#F37B6A",
          y500: '#B14B00',
          y400: '#FFBB38',
          y300: '#FFD079',
          y100: '#FFFAF1'
        },
        white: {
          DEFAULT: '#fff'
        },
        black: {
          DEFAULT: '#000',
          neutrals: '#2F2826'
        },
        red: {
          DEFAULT: '#F05340'
        },
        green: {
          'g500': '#6cc24a'
        },
        brown: {
          DEFAULT: '#D2B48C',
          b200: '#efe1bd',
          b500: '#DEB887',
        },
        blue: {
          neutrals: '#005594',
          'b400': '#61DBFB',
          'b500': '#4267B2',
          'b600': '#6f00ff',
          'b700': '#0072b1',
          'b800': '#3b5998',
        },
        purple: {
          'p600': '#6e5494'
        },
        yellow: {
          DEFAULT: '#e9d5a1',
          neutrals: '#fcb700'
        },
        text: {
          black: '#000000',
          white: '#ffffff',
          gray: '#a9a9a9',
          yellow: '#fcb700',
          blue: '#005594'
        }
      },
    },
    fontFamily: {
      'poppins': ["'Lexend Deca'", 'sans-serif'],
      'display': ["'Lexend Deca'", 'sans-serif'],
      'body': ["'Lexend Deca'", 'sans-serif'],
      'h1': ["'Franklin Gothic Medium'", "'Arial Narrow'", 'Arial', 'sans-serif'],
      // 'github': [
      //   '-apple-system',
      //   'BlinkMacSystemFont',
      //   "'Segoe UI'",
      //   'Helvetica',
      //   'Arial',
      //   'sans-serif',
      //   "'Segoe UI'",
      //   "'Segoe UI Emoji'",
      //   "'Segoe UI Symbol'",
      // ],
      'trebuchet': [
        '"Trebuchet MS"',
        '"Lucida Sans Unicode"',
        '"Lucida Grande"',
        '"Lucida Sans"',
        'Arial',
        'sans-serif'
      ]
    },
    fontSize: {
      '2xs': ['10px', { lineHeight: '1.5' }],
      xs: ['12px', { lineHeight: '1.5' }],
      sm: ['14px', { lineHeight: '1.5' }],
      base: ['16px', { lineHeight: '1.5' }],
      lg: ['18px', { lineHeight: '1.5' }],
      xl: ['20px', { lineHeight: '1.5' }],
      '2xl': ['24px', { lineHeight: '1.5' }],
      '2.5xl': ['26px', { lineHeight: '1.5' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '28px': ['32px', { lineHeight: '1.5' }],
      '32px': ['32px', { lineHeight: '1.25' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extraBold: 800,
      black: 900
    },
  },
  plugins: [],
}
