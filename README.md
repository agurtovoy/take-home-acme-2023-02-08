# Simplified Acme Co. Dashboard (take home project)

## Implemented features
 - Fetching data from the provided REST endpoints, including caching and automatic retries on errors
 - "Group By" dropdown, including managing the corresponding `group` query parameter
 - Toggling between the "Gender" and "Race" tabs
 - True-to-mocks UX
 - Responsiveness down to phone screen sizes
 - Base-level controls accessibility
 - Internalization-enabled dashboard content
 - CSS autoprefixing

## Used technologies

 - React 18.2
 - [HeadlessUI](https://headlessui.com/) for unstyled, accessible UI components
 - [TailwindCSS](https://tailwindcss.com/) for styling
 - [swr](https://swr.vercel.app/) + `fetch` for lightweight, robust data fetching
 - [Storybook v7](https://storybook.js.org/docs/7.0/react/get-started/introduction) for component-centered development
 - [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Stylelint](https://stylelint.io/) for automatic enforcement of basic code hygiene
 - [Vite](https://vitejs.dev/) for bundling/HMR
 - `npm` for package management
   
## Local development workflows

| Task          | Command       |
| ------------- | ------------- |
| Run dev server | `npm install && npm run dev` |
| Run storybook | `npm run storybook` |


## Known deficiences

- No unit or UI testing
- Stories coverage could be better
- "Brand Colors" story appears to be broken due to apparent optimization of "unused" styles by TailwindCSS when it's compiled for Storybook
- While HeadlessUI components are "accessible by default", additional work is needed to properly support certain accessibility aspects such keyboard navigation
- No indication of the loading state/network errors/being offline, etc.
- No UI transitions/animations
