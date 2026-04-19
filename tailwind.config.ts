import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:    '#F5F0E8',
        panel:     '#E8DFD2',
        ink:       '#1F1A16',
        taupe:     '#8A7B6C',
        champagne: '#C9A875',
        linen:     '#E4DACC',
        blush:     '#E8C5BE',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '20px',
        xl: '32px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
export default config;
