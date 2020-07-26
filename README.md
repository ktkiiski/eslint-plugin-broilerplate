# Broilerplate ESLint configuration

An opinionated ESLint configuration for projects using [TypeScript](https://www.typescriptlang.org/) + [React](https://reactjs.org/) + [React hooks](https://reactjs.org/docs/hooks-intro.html).
This is a mashup of [Airbnb JavaScript code style conventions](https://github.com/airbnb/javascript) + [TypeScript ESSLint plugin](https://github.com/typescript-eslint/typescript-eslint) + [Prettier](https://prettier.io/).

## Usage

Install to your project:

    npm i --save-dev eslint-config-broilerplate

Note that ESLint itself is a peer dependency and needs to be installed separately:

    npm i --save-dev eslint

Configure your `.eslintrc` in your project:

```json
{
    "root": true,
    "extends": "broilerplate"
}
```

Also add the following line to your `package.json` to use the recommended Prettier configuration, included in this package:

```diff
 {
   "name": "my-app",
+  "prettier": "eslint-config-broilerplate/prettier.config",
   "dependencies": {}
 }
```

Run the linter:

    npx eslint . --ext .ts,.tsx
