# Vue + TypeScript + Tailwind 4 Starter

A modern, minimal starter template for building Vue 3 applications with Vite, TypeScript, and Tailwind CSS 4.

Designed with a streamlined development workflow, strict type checking, automated linting, consistent formatting, and Git hooks.

## Tech Stack

| Technology                                                | Purpose                           |
| --------------------------------------------------------- | --------------------------------- |
| [Vue 3](https://vuejs.org/)                               | UI framework                      |
| [TypeScript](https://www.typescriptlang.org/)             | Static typing                     |
| [Vite](https://vite.dev/)                                 | Build tool and development server |
| [Tailwind CSS 4](https://tailwindcss.com/)                | Utility-first CSS                 |
| [Pinia](https://pinia.vuejs.org/)                         | State management                  |
| [Vue Router](https://router.vuejs.org/)                   | Client-side routing               |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)     | Fast linting                      |
| [ESLint](https://eslint.org/)                             | Advanced linting and code quality |
| [Prettier](https://prettier.io/)                          | Code formatting                   |
| [Husky](https://typicode.github.io/husky/)                | Git hooks                         |
| [lint-staged](https://github.com/lint-staged/lint-staged) | Staged-file processing            |

## Requirements

- Node.js `^22.18.0 || >=24.12.0`
- pnpm

## Project Setup

Install dependencies:

```sh
pnpm install
```

## Development

Start the development server with hot module replacement:

```sh
pnpm dev
```

## Production

Type-check, compile, and minify for production:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## Code Quality

### Linting

Run Oxlint and ESLint across the project:

```sh
pnpm lint
```

### Formatting

Format source files with Prettier:

```sh
pnpm format
```

### Type Checking

Run Vue and TypeScript type checking:

```sh
pnpm type-check
```

## Git Hooks

Husky and lint-staged automatically process staged files before each commit.

The pre-commit hook runs:

- **Oxlint** — automatically fixes supported lint issues.
- **ESLint** — applies ESLint fixes and import sorting.
- **Prettier** — formats staged source files and supported configuration/documentation files.

Only staged files matching the configured patterns are processed.

## Recommended IDE

[Visual Studio Code](https://code.visualstudio.com/) with the following extension:

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

The Vue - Official extension provides Vue language support, TypeScript integration, template intelligence, and diagnostics.

## Recommended Browser Extensions

Vue DevTools:

- [Chrome / Chromium](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

Enable custom object formatters in browser developer tools for improved inspection of Vue reactive objects:

- [Chrome DevTools](http://bit.ly/object-formatters)
- [Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Configuration

- [Vite Configuration](https://vite.dev/config/)
- [TypeScript Configuration](https://www.typescriptlang.org/tsconfig/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ESLint Configuration](https://eslint.org/docs/latest/use/configure/)
- [Prettier Configuration](https://prettier.io/docs/configuration)
