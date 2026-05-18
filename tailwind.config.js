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
      colors: {
        void: '#0A0A0B',
        obsidian: '#141417',
        graphite: '#1E1E24',
        slate: {
          DEFAULT: '#2A2A33',
          50: '#2A2A33',
        },
        ash: '#6B6B7B',
        silver: '#9B9BAD',
        cloud: '#CDCDD9',
        ivory: '#F0F0F5',
        neon: {
          DEFAULT: '#A855F7',
          glow: '#C084FC',
          muted: '#7C3AED',
          10: 'rgba(168, 85, 247, 0.10)',
          20: 'rgba(168, 85, 247, 0.20)',
        },
        success: {
          DEFAULT: '#3DD68C',
          bg: 'rgba(61, 214, 140, 0.10)',
        },
        info: '#5B9CF5',
        warning: '#F5A623',
        error: '#E84855',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Instrument Serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
        display: ['var(--font-serif)', 'Instrument Serif', 'Georgia', 'serif'],
        body: ['var(--font-sans)', 'Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-md': ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        caption: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.03em' }],
        overline: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
      },
      maxWidth: {
        container: '1440px',
        content: '1280px',
        prose: '68ch',
      },
      boxShadow: {
        'sm-dark': '0 1px 3px rgba(0, 0, 0, 0.4)',
        'md-dark': '0 4px 16px rgba(0, 0, 0, 0.5)',
        'lg-dark': '0 8px 32px rgba(0, 0, 0, 0.6)',
        glow: '0 0 40px rgba(168, 85, 247, 0.20)',
        'glow-strong': '0 0 60px rgba(168, 85, 247, 0.35)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
      screens: {
        xs: '475px',
        nav: '1025px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scale-in 500ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
