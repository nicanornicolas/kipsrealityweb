/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sen: ['var(--font-sen)'],
      },
      colors: {
        navy: {
          50: 'var(--color-navy-50)',
          100: 'var(--color-navy-100)',
          200: 'var(--color-navy-200)',
          300: 'var(--color-navy-300)',
          400: 'var(--color-navy-400)',
          500: 'var(--color-navy-500)',
          600: 'var(--color-navy-600)',
          700: 'var(--color-navy-700)',
          800: 'var(--color-navy-800)',
          900: 'var(--color-navy-900)',
          DEFAULT: '#003b73',
        },
        cyan: {
          DEFAULT: '#30d5c8',
          400: '#30d5c8',
        },
        primary: {
          DEFAULT: '#003b73',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f0f4f8',
          foreground: '#003b73',
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f0f4f8',
          foreground: '#6b7280',
        },
        accent: {
          DEFAULT: '#30d5c8',
          foreground: '#003b73',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      borderRadius: {
        DEFAULT: '0.65rem',
      },
    },
  },
  plugins: [],
};
