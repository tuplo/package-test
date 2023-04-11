# @tuplo/package-test

Imports a package and runs the code using different module strategies.

```bash
yarn test
yarn lint
```

or by individual strategies:

```bash
yarn test:cjs
yarn test:mjs
yarn test:ts:ts-node
yarn test:ts:tsx
yarn test:ts:node16

yarn lint:ts
yarn lint:ts:node16

```

### CommonJS/ESM Modules

- imports using `require` (commonjs)
- imports using `import` (esm)

### Typescript

- checks types with `moduleResolution: commonjs`
- checks types with `moduleResolution: nodenext` 

