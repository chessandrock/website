/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './resources/**/*.{blade.php,html,js,jsx}',
        'node_modules/preline/dist/*.js'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
                serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
                mono: ['Noto Mono', ...defaultTheme.fontFamily.mono]
              }
        }
    },
    plugins: [require('preline/plugin')]
}
