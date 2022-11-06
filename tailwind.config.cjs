/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '480px',
      },
      colors: {
        app: {
          background: '#121212',
          backgroundDisabled: '#29292E',
          primary: '#00875F',
          secondary: '#8047F8',
          tertiary: '#46B5D1',
          title: '#E1E1E6',
          subtitle: '#C4C4CC',
          text: '#E1E1E6',
          textDisabled: '#8D8D99',
          span: '#49454F',
          label: '#C4C4CC',
          border: '#C4C4CC',
          borderDisabled: '#e2e8f0',
          info: '#24B4FF',
          success: '#1EB980',
          warning: '#FFAC12',
          error: '#B3261E',
        },
      },
      spacing: {
        96: '24rem',
        256: '64rem',
        320: '80rem',
        360: '90rem',
      },
      brightness: {
        25: '.25',
        85: '.85',
      },
      boxShadow: {
        outline: '0 0 0 1px',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem' }],
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'fit56': 'repeat(auto-fit, minmax(3.5rem, 1fr))',
      },
      zIndex: {
        9999: '9999',
      },
    },
  },
  plugins: [],
}
