/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004777',
        secondary: '#FF8B3D',
        accent: '#FF5A5F',
        neutral: {
          light: '#F5F5F5',
          DEFAULT: '#3D3A38',
          dark: '#252525',
        },
        base: {
          content: '#333333',
          muted: '#666666',
          inverted: '#FFFFFF',
        },
        social: {
          dribble: "#EA4C89",
          instagram: "#E4405F",
          twitter: "#1DA1F2",
          linkedin: "#0A66C2",
          github: "#181717",
          doc: "#4285F4"
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
