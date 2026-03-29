import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        blush: '#f7e5e9',
        rosewood: '#4b2e39',
        mauve: '#8f5f73',
        cream: '#fff9f7'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 15px 40px rgba(196, 127, 150, 0.28)'
      }
    }
  },
  plugins: []
};

export default config;
