import "src/global.css";

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
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
