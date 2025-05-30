module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/ui-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#15803d', // green.600 (used for the main accent or brand color)
          light: '#15803d', // green.600 (lighter shade)
          dark: '#15803d', // green.600 (darker shade)
        },
        secondary: {
          DEFAULT: '#16a34a', // green.700 (secondary color, slightly brighter green)
          light: '#16a34a', // green.700 (lighter shade)
          dark: '#16a34a', // green.700 (darker shade)
        },
        tertiary: {
          DEFAULT: '#4b5563', // gray.600 (used for less important text or background)
          light: '#4b5563', // gray.600 (lighter shade)
          dark: '#4b5563', // gray.600 (darker shade)
        },
        accent: {
          DEFAULT: '#F97316', // orange.600 (accent color for highlights or buttons)
          light: '#FDBA74', // orange.300 (light orange for subtle hover effects or borders)
          dark: '#C2410C', // orange.800 (darker orange for more emphasis)
        },
        neutral: {
          DEFAULT: '#64748B', // gray.500 (neutral color for text or secondary elements)
          light: '#94A3B8', // gray.400 (lighter neutral color for softer backgrounds or text)
          dark: '#475569', // gray.700 (dark neutral color for more contrast in text or elements)
        },
        background: '#F8FAFC', // gray.50 (light background color for general use)
        foreground: '#1E293B', // gray.900 (dark color for primary text or high contrast elements)
        gray1: 'gray.100',
      },
    },
  },
  plugins: [],
};
