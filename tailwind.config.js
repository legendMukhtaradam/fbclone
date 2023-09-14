
module.exports = {
  mode: 'jit',
  purge:["./page/**/*./{js,ts,tsx,tsx}","./components/**/*.{js,ts,tsx,tsx}"],
  darkMode: false,
  theme:{
    extend:{}
  },
  variants:{
    extend:{}
  },
  plugins:[],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
//  require("tailwind-scrollber-hide")
