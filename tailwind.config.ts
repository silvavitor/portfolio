import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bottomUpFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(+20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        upBottomFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        leftRightFadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        }
      },
      animation: {
        bottomUpFadeIn: 'bottomUpFadeIn 1s ease-out',
        upBottomFadeIn: 'upBottomFadeIn 1s ease-out',
        leftRightFadeIn: 'leftRightFadeIn 1s ease-out'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.flex-0-100': {
          'flex': '0 0 100%',
        },
        '.flex-0-33': {
          'flex': '0 0 33%',
        }
      })
    }),
  ],
}
export default config
