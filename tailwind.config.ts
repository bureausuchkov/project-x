import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        colors: {
            transparent: 'transparent',
            black: {
                DEFAULT: '#000000',
            },
            white: {
                DEFAULT: '#FFFFFF',
            },
            orange: {
                DEFAULT: '#f2490a',
            },
            red: {
                DEFAULT: '#ff0000',
            },
        },
        fontFamily: {
            //sans: ['Benzin', 'sans-serif'],
            benzin: ['Benzin', 'sans-serif'],
            petrov: ['Petrov', 'sans-serif'],
            manrope: ['Manrope', 'sans-serif'],
        },
        screens: {
            xs: '320px',
            sm: '480px',
            md: '768px',
            lg: '992px',
            xl: '1281px',
            '2xl': '1600px',
            '3xl': '1920px',
        },
        extend: {
            spacing: {
                13: '8.125rem',
                15: '3.75rem',
                25: '6.25rem',
                26: '16.25rem',
            },
            fontSize: {
                'xs': '0.75rem',
                'sm': '0.875rem',
                'md': '1.3125rem',
                'lg': '1.75rem',
                'xl': '2.75rem',
                '2xl': '8.125rem',
                '3xl': '8.75rem',
            },
            textShadow: {
                sm: "rgba(255, 255, 255, 0.35) 1px 1px 12px",
            },
        },
    },
    content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
    ],
}
