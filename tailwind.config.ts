import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#0891b2', // cyan-600
        'neon-lime': '#65a30d', // lime-600
        'sybil-red': '#dc2626', // red-600
        'sybil-gold': '#ca8a04', // yellow-600
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      boxShadow: {
        // More subtle outer outlines for light theme to look like the Sibyl clear UI
        'neon-cyan':
          '0 0 0 1px rgba(8, 145, 178, 0.4), 0 4px 10px rgba(8, 145, 178, 0.1)',
        'neon-lime':
          '0 0 0 1px rgba(101, 163, 13, 0.4), 0 4px 10px rgba(101, 163, 13, 0.1)',
        'neon-red':
          '0 0 0 1px rgba(220, 38, 38, 0.4), 0 4px 10px rgba(220, 38, 38, 0.1)',
        'neon-gold':
          '0 0 0 1px rgba(202, 138, 4, 0.4), 0 4px 10px rgba(202, 138, 4, 0.1)',
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
          '50%': { opacity: '0.6' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '1',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.6' },
        },
        'holo-expand': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'border-glow': {
          '0%, 100%': {
            borderColor: 'rgba(8, 145, 178, 0.3)',
            boxShadow: '0 0 0 1px rgba(8, 145, 178, 0.1)',
          },
          '50%': {
            borderColor: 'rgba(8, 145, 178, 0.7)',
            boxShadow: '0 0 0 2px rgba(8, 145, 178, 0.3)',
          },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(8, 145, 178, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(8, 145, 178, 0.1) 1px, transparent 1px)',
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
