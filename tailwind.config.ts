import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071a3d',
        paper: '#fffdf8',
        haze: '#f5f1e9',
        magenta: '#ff4bc1',
        sun: '#f7c35f',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial Black', 'Impact', 'sans-serif'],
        sans: ['var(--font-sans)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        raw: '8px 8px 0 #071a3d',
        rawPink: '8px 8px 0 #ff4bc1',
      },
    },
  },
  plugins: [],
};
export default config;
