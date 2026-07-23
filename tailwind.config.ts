import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0055CC',
        'primary-dark': '#003D99',
        'primary-light': '#E6F0FF',
        'secondary': '#FF6B35',
        'dark': '#1A1A1A',
        'gray-light': '#F5F5F5',
        'gray-medium': '#E0E0E0',
        'accent': '#00D4FF',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
};

export default config;