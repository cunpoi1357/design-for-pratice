/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#0072F8',
                secondary: '#2C3A57',
                neutrals: {
                    '03': '#E6E8EC',
                    '04': '#B1B5C4',
                    '05': '#777E90'
                }
            }
        }
    },
    plugins: []
}
