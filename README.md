# nuxt-trustup-io-toasteo

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Our notification package for nuxt.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@deegital/nuxt-trustup-io-toasteo?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Add `@deegital/nuxt-trustup-io-toasteo` dependency to your project

```bash
# Using pnpm
pnpm add -D @deegital/nuxt-trustup-io-toasteo

# Using yarn
yarn add --dev @deegital/nuxt-trustup-io-toasteo

# Using npm
npm install --save-dev @deegital/nuxt-trustup-io-toasteo
```

2. Add `@deegital/nuxt-trustup-io-toasteo` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@deegital/nuxt-trustup-io-toasteo"],
  trustupIoToasteo: {},
});
```

3. Add `./node_modules/@deegital/vue-trustup-io-toasteo/dist/index.cjs` in your tailwind config

```js
export default {
  content: [
    ... ,
    "./node_modules/@deegital/vue-trustup-io-toasteo/dist/index.cjs",
  ],
   ...
```

That's it! You can now use nuxt-trustup-io-toasteo in your Nuxt app ✨

## Development

### Bootstrap module

Find and replace all on all files (CMD+SHIFT+F):

```shell
  - nuxt-trustup-io-toasteo // nuxt-trustup-io-toasteo
  - Our notification package for nuxt. // Our notification package for nuxt.
  - trustupIoToasteo // trustupIoToasteo
  - @deegital // @deegital
  - git@github.com:deegitalbe/nuxt-trustup-io-toasteo.git // git@github.com:deegitalbe/nuxt-trustup-io-toasteo.git
```

Start bootstrap script

```shell
./cli bootstrap
```

### Available commands

```bash
# Install dependencies
./cli yarn install

# Generate playground
./cli yarn generate

# Start project
./cli start

# Stop project
./cli stop

# Restart project
./cli restart

# Build the playground for production
./cli yarn dev:build

# Run ESLint
./cli yarn lint

# Run Vitest
./cli yarn test
./cli yarn test:watch

# Validate your package (running linter & typecript validation)
./cli yarn validate

# Build the package for publication
./cli yarn build

# Release new version
npm version patch
```

### References

Nuxt module development [reference](https://nuxt.com/docs/guide/going-further/modules)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@deegital/nuxt-trustup-io-toasteo/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@deegital/nuxt-trustup-io-toasteo
[npm-downloads-src]: https://img.shields.io/npm/dm/@deegital/nuxt-trustup-io-toasteo.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@deegital/nuxt-trustup-io-toasteo
[license-src]: https://img.shields.io/npm/l/@deegital/nuxt-trustup-io-toasteo.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@deegital/nuxt-trustup-io-toasteo
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
