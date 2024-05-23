import type { Config } from 'tailwindcss';

const config: Config = {
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
        'custom-gradient':
          'linear-gradient(-90deg, rgba(0,0,0,0) 17%, #000000 100%)',
        'shiny-gold': 'linear-gradient(261deg, #d4af37 -14.11%, #fceabb 30%, #ffffff 50%, #fceabb 70%, #d4af37 89.75%)',
        'shiny-silver': 'linear-gradient(261deg, #c0c0c0 -14.11%, #e0e0e0 30%, #ffffff 50%, #e0e0e0 70%, #c0c0c0 89.75%)'
      },
    },
  },
  plugins: [],
};
export default config;
