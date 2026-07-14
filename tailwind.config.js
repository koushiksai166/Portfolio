/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          base: '#0A0E17',
          card: '#0F1523',
          cyan: '#00F0FF',
          violet: '#8B5CF6',
          green: '#39FF88',
          amber: '#FFB020',
          'text-primary': '#E8ECF4',
          'text-muted': '#8B93A7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,240,255,0.3), 0 0 40px rgba(0,240,255,0.1)',
        'glow-cyan-sm': '0 0 10px rgba(0,240,255,0.25)',
        'glow-violet': '0 0 20px rgba(139,92,246,0.3), 0 0 40px rgba(139,92,246,0.1)',
        'glow-green': '0 0 15px rgba(57,255,136,0.3)',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00F0FF, #8B5CF6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
