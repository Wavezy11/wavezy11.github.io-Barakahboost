import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          dark:    '#040d0d',
          surface: '#071412',
          surface2:'#0c1f1c',
          accent:  '#3ecfb2',
          mid:     '#2d7d6f',
          deep:    '#0a3d35',
          light:   '#a8c5b8',
          muted:   '#6b9e95',
        }
      },
      fontFamily: {
        display: ['var(--font-clash)', 'sans-serif'],
        body:    ['var(--font-satoshi)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #a8c5b8 0%, #2d7d6f 40%, #0a3d35 100%)',
        'glass':          'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'orb-drift':  'orbDrift 20s ease-in-out infinite',
        'marquee':    'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 12px rgba(62,207,178,0.4))' },
          '50%':      { filter: 'drop-shadow(0 0 28px rgba(62,207,178,0.75))' },
        },
        orbDrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%':      { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      backdropBlur: { '20': '20px' },
    },
  },
  plugins: [],
}
export default config
