/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*.html'],
    theme: {
        extend: {
            fontFamily: {
                code: ['Source Sans 3', 'monospace'],
            },
            colors: {
                primary: {
                    dark: {
                        100: '#141D26',
                        200: '#243447',
                    },
                    blue: {
                        100: '#1DA1F2',
                    },
                },
            },
        },
    },
    plugins: [],
}
