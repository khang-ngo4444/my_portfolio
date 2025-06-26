/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,css,html}",
    "./*.html",
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
        // New vibrant colors
        'neon-blue': '#1E88E5',
        'electric-purple': '#6A1B9A',
        'acid-green': '#64DD17',
        'lava-orange': '#FF5722',
        'cyber-yellow': '#FFEA00',
        'toxic-green': '#76FF03',
        'arctic-blue': '#00B8D4',
        'mystic-violet': '#9C27B0',
        'digital-teal': '#009688',
        'ember-orange': '#FF9800'
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
      }
    }
  },
  plugins: [],
}
