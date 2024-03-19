import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
        },
    },
    extend: {
        fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        },
        spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
        },
        borderRadius: {
            '4xl': '2rem',
        },
        colors: {
            'light-primary': '#F8F7FF',
            'light-secondary': '#D0DBE5',
            'light-auxulary': '#B3B8BD',
            'dark-primary': '#0D1F22',
            'blue-primary': "#758BFD",
            'blue-secondary': "#4A68FC",
        },
        height: {
            '128': '32rem',
            '160': '40rem',
            'admin-half-card-height': '23.5rem',
            'admin-full-card-height': '48rem',
        }
    },
},

plugins: [forms],
}