const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: {
        content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
        options: {
            safelist: ['dark', 'light']
        }
    },
    darkMode: 'class',
    theme: {
        colors: {
            white: colors.white,
            gray: colors.blueGray,
            yellow: colors.yellow,
            midnight: '#0b0d24',
            neonBlue: '#2a4158',
            lightBlue: '#597387'
        },
        fontFamily: {
            sans: ['Lato', ...defaultTheme.fontFamily.sans]
        },
        screens: {
            tablet: '640px'
        },
        extend: {
            zIndex: {
                '-1': '-1'
            }
        }
    }
}
