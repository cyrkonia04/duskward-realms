/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Lora"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        gothic: {
          bg: '#1a1410',
          surface: '#2a1f18',
          gold: '#c4a87a',
          parchment: '#e8dcc8',
          amber: '#8a6e4b',
          bronze: '#b8946a',
          purple: '#4a3b5c',
          // Light lavender of the Twilight Deeps — readable on the dark
          // background where `purple` disappears. Use `purple` for large
          // surfaces, `deeps` for thin lines and small text.
          deeps: '#a89bc0',
        },
      },
      backgroundImage: {
        mist: "url('/images/misty-forest.jpg')",
        'parchment-texture': "url('/images/parchment-texture.jpg')",
      },
    },
  },
  plugins: [],
};