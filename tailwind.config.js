module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                serif: ['Bitter', 'serif'],
                mono: ['Fira Code', 'monospace']
            },
            backgroundImage: {
                'source-code': "url('images/analyze-source-code.jpg')"
            },
            animation: {
                'ping-sm': 'ping-sm 3s linear infinite'
            },
            keyframes: {
                'ping-sm': {
                    '75%, 100%': {
                        transform: 'scale(1.25)',
                        opacity: 0
                    }
                }
            }
        },
        variants: {
            extend: {}
        },
        plugins: [require('@tailwindcss/typography')]
    }
}
