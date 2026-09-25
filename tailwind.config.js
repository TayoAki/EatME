/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  // The app is light-only (userInterfaceStyle: "light"). "class" lets Expo set the color scheme
  // without NativeWind throwing "Cannot manually set color scheme" on web.
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        canvas: '#FFFFFF',
        surface: '#F6F6F7',
        line: '#EDEDED',
        muted: '#8E8E93',
        faint: '#C7C7CC',
        protein: '#F2665E',
        carbs: '#F4A63A',
        fat: '#4F8EF7',
        fiber: '#B15FB0',
        water: '#14B8A6',
        flame: '#FF7A1A',
        danger: '#E5484D',
        success: '#2FB36B',
      },
      borderRadius: {
        card: '24px',
        field: '16px',
      },
    },
  },
  plugins: [],
};
