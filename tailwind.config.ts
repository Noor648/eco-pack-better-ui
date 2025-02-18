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
          DEFAULT: '#15803d', // Default primary color
          light: '#15803d', // Lighter shade
          dark: '#15803d', // Darker shade
        },
        secondary: {
          DEFAULT: '#16a34a',
          light: '#16a34a',
          dark: '#16a34a',
        },
        tertiary: {
          DEFAULT: '#4b5563',
          light: '#4b5563',
          dark: '#4b5563',
        },
        accent: {
          DEFAULT: '#F97316',
          light: '#FDBA74',
          dark: '#C2410C',
        },
        neutral: {
          DEFAULT: '#64748B',
          light: '#94A3B8',
          dark: '#475569',
        },
        background: '#F8FAFC',
        foreground: '#1E293B',
      },
    },
  },
  plugins: [],
};
