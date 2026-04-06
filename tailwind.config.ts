import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#22d3ee',
        'neon-lime': '#a3e635',
        'sybil-red': '#ef4444',
        'sybil-gold': '#facc15',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #22d3ee, 0 0 20px rgba(34,211,238,0.3)',
        'neon-lime': '0 0 5px #a3e635, 0 0 20px rgba(163,230,53,0.3)',
        'neon-red': '0 0 5px #ef4444, 0 0 20px rgba(239,68,68,0.3)',
        'neon-gold': '0 0 5px #facc15, 0 0 20px rgba(250,204,21,0.3)',
      },
      animation: {
        glitch: 'glitch 0.3s ease-in-out',
        scanline: 'scanline 8s linear infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        flicker: 'flicker 3s linear infinite',
        'holo-expand': 'holo-expand 0.6s ease-out',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        typing: 'typing 2s steps(20) forwards',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '1',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        'holo-expand': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'border-glow': {
          '0%, 100%': {
            borderColor: 'rgba(34, 211, 238, 0.3)',
            boxShadow: '0 0 5px rgba(34, 211, 238, 0.1)',
          },
          '50%': {
            borderColor: 'rgba(34, 211, 238, 0.6)',
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)',
          },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '50px 50px',
      },
    },
  },
  plugins: [],
  important: true,
};

export default config;
