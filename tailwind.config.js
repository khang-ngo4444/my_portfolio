/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'persona-red': '#E60012',
        'persona-crimson': '#B20000',
        'persona-pink': '#FF1744',
        'persona-black': '#0D0D0D',
        'phantom-black': '#000000',
        'persona-white': '#FFFFFF',
        'persona-gray': '#CCCCCC',
        'phantom-purple': '#4A148C',
        'neon-cyan': '#00E5FF',
        'royal-gold': '#FFD700',
        'deep-magenta': '#C2185B',
        'shadow-navy': '#1A237E',
        'arctic-blue': '#2196F3',
        'toxic-green': '#76FF03',
        'lava-orange': '#FF5722',
        'electric-purple': '#6A1B9A',
        'cyber-yellow': '#FFEA00'
      },
      fontFamily: {
        'persona': ['Rajdhani', 'sans-serif'],
        'royal': ['Orbitron', 'monospace']
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-in',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

