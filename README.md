# React MobX Starter

Very opinionated starter project for building apps with React, MobX and Typescript

## Tech

- NextJS
- TypeScript
- MobX
- MobX blocks
- TailwindCSS
- Prettier
- Storybook
- Cypress

## Features

- Feature folders architecture
- Strict TS config
- Grouped/sorted imports with ESLint
- `src` folder with `~/` alias configured
- Basic auth pages
- [TODO] Generators for page components, store entities

## Getting started

Copy the repo

```bash
git clone https://github.com/Peterabsolon/react-mobx-starter my-app
```

Delete old git history

```bash
cd my-app
rm -rf .git
```

Init new history

```
git init
```

Start dev server

```
npm run dev
```

Run Typescript compiler in watch mode in a separate tab

```
npm run ts:watch
```

Run Storybook - components playground/documentation

```
npm run storybook
```

Run Cypress E2E tests

```
npm run cy:run
```

Done!
