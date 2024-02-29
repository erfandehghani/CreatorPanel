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
            'primary': '#F8F7FF',
            'auxulary': '#D0DBE5',
            't-primary': '#0D1F22',
            't-secondary': '#B3B8BD',
            'green-primary': "#4B8161",
            'green-secondary': "#86EFAC",
            'green-primary-hover': "#264030",
            'secondary': "#758BFD",
            'secondary-hover': "#4A68FC",

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