/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,jsx,css}"],
    theme: {
        colors: {
            transparent: "transparent",
            black: "#000000",
            white: "#ffffff",
            gray: {
                50: "#F8F8F8",
                100: "#F2F2F2",
                200: "#E7E7E7",
                500: "#666666",
                700: "#373737",
                800: "#2E2E2E",
                900: "#262626",
            },
            accent: "#0D8B7F",
        },
    },
    plugins: [],
};
