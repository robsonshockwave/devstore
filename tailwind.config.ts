import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      gridTemplateColumns: {
        app: 'min-content max-content',
        colsNine: 'grid-template-columns: repeat(9, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
