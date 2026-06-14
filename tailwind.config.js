/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#020617',
        panel: 'rgba(15, 23, 42, 0.7)',
        signal: '#38bdf8',
        orbit: '#0ea5e9',
        frost: '#f8fafc',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.18)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
