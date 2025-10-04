import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './tailwind-classes.txt', // Class reference file for enhanced styling
  ],
  safelist: [
    // Enhanced gradient classes for visual components
    'from-slate-900',
    'via-blue-900', 
    'via-gray-900',
    'via-slate-800',
    'to-indigo-900',
    'from-white',
    'via-blue-100',
    'to-blue-200',
    'from-blue-200',
    'to-blue-100',
    'from-emerald-400',
    'via-cyan-400',
    'to-blue-400',
    'bg-clip-text',
    'text-transparent',
    'font-black',
    'font-extrabold',
    'text-slate-200',
    'leading-relaxed',
    // Interactive states
    'hover:scale-105',
    'hover:scale-110',
    'hover:-translate-y-1',
    'hover:-translate-y-2',
    'transition-transform',
    'duration-300',
    'duration-500',
    'backdrop-blur-sm',
    'shadow-2xl',
    'rounded-3xl',
    'border-slate-200',
    'border-slate-700',
  ],
  theme: {
    extend: {
      colors: {
        vommuli: {
          primary: '#1B5E20',
          secondary: '#4CAF50', 
          accent: '#81C784',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'shimmer': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config