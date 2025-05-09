export default {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.{vue,js}',
        './pages/**/*.{vue,js}',
        './app.vue'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Comic Neue"', 'sans-serif'],
            },
            colors: {
                primary: '#78a678',
                text: '#2e3c27',
            }
        },
    },
    plugins: [],
}