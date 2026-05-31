/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'nav': '1025px',
      },
      colors: {
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-muted': 'var(--color-accent-muted)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        highlight: 'var(--color-highlight)',
        cta: 'var(--color-cta)',
        'cta-hover': 'var(--color-cta-hover)',
        'accent-cyan': 'var(--color-accent-cyan)',
        'bg-warm': 'var(--bg-warm)',
        'bg-peach': 'var(--bg-peach)',
        'section-alt': 'var(--bg-section-alt)',
        surface: 'var(--bg-surface)',
        card: 'var(--bg-card)',
        muted: 'var(--bg-muted)',
        footer: 'var(--bg-footer)',
      },
      backgroundColor: {
        base: 'var(--bg-base)',
        surface: 'var(--bg-surface)',
        card: 'var(--bg-card)',
        'section-alt': 'var(--bg-section-alt)',
        glass: 'var(--glass-bg)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        'on-accent': 'var(--text-on-accent)',
      },
      borderColor: {
        DEFAULT: 'var(--border-default)',
        strong: 'var(--border-strong)',
        accent: 'var(--border-accent)',
        glass: 'var(--glass-border)',
      },
      backdropBlur: {
        glass: 'var(--glass-blur)',
        'glass-heavy': 'var(--glass-blur-heavy)',
      },
    },
  },
  plugins: [],
}
