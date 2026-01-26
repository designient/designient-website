/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['var(--font-display)', 'Bebas Neue', 'sans-serif'],
        'body': ['var(--font-body)', 'Inter', 'sans-serif'],
        'sans': ['var(--font-body)', 'Inter', 'sans-serif']
      },
      maxWidth: {
        'container': '1600px'
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
}
