// import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./resources/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree'],
            },
        },
    },
    plugins: [typography],
};
