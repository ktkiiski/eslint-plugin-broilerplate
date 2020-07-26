# Broilerplate ESLint configuration

An opinionated ESLint configuration for projects using TypeScript + React + React hooks.
This is a mashup of Airbnb rule set + TypeScript ESSLint plugin + Prettier.

## Usage

Install to your project:

    npm i --save-dev eslint-config-broilerplate

Note that ESLint itself is a peer dependency and needs to be installed separately:

    npm i --save-dev eslint

Configure your `.eslintrc` in your project:

```
{
    "root": true,
    "extends": "broilerplate"
}
```

Run the linter:

    npx eslint . --ext .ts,.tsx
