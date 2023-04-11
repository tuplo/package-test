# @tuplo/package-test

Imports a package and runs the code using different module strategies.

```bash
yarn start
```
or by tasks

```
yarn compile
yarn jest
yarn lint
```

or by individual strategies:

```bash
compile:cjs
compile:esm
compile:ts:node16
compile:ts:ts-node
compile:ts:tsx

jest:cjs
jest:esm
jest:ts

lint:ts:node16
lint:ts

```

### CommonJS/ESM Modules

- imports using `require` (commonjs)
- imports using `import` (esm)

### Typescript

- checks types with `moduleResolution: commonjs`
- checks types with `moduleResolution: nodenext` 

### Jest

- tests a commonjs module (native behavior)
- tests a esm module (following instructions)
- tests a ts module (with ts-jest)


