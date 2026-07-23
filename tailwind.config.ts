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
        'dark': '#0F172A',
        'gray-light': '#F7F9FC',
        'gray-medium': '#DDE3EA',
        'gray-muted': '#64748B',
        'surface': '#FFFFFF',
        'neutral': '#F2F5F9',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)',
        elevated: '0 30px 100px rgba(15, 23, 42, 0.1)',
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