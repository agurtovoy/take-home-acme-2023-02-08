import "tailwindcss/tailwind.css";

export const parameters = {
    backgrounds: {
        default: 'white',
        values: [
            {
            name: 'white',
            value: '#ffffff',
            },
        ],
    },
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
