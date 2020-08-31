module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Expected to use several indirectly installed dependencies, so turning this off
    'import/no-extraneous-dependencies': 'off',
    // Allow using JSX in .jsx and .tsx files and nowhere else
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    // Allow importing `.ts` and `.tsx` files without an extension
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        css: 'always',
        png: 'always',
        jpg: 'always',
        jpeg: 'always',
        md: 'always',
      },
    ],
    // Functions may be used before usage
    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    // These rules conflicts with Prettier so turn them off
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    // Do not warn on missing generator func names
    'func-names': ['warn', 'always', { generators: 'as-needed' }],
    // Only allow unused variables when omitting keys with object destruction
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    // Allow methods that do not use this
    'class-methods-use-this': 'off',
    // Allow using for...of
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // It's enought that <label> have EITHER htmlFor or nested inputs
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
    // Make JSX wrapping rule compatible with Prettier
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    // Stricter import sorting to achieve consistent/deterministic ordering
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        'groups': [['builtin', 'external', 'internal']],
        'newlines-between': 'never',
        'alphabetize': { order: 'asc' },
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Consider TypeScript when using constructors
        '@typescript-eslint/no-useless-constructor': ['error'],
        'no-useless-constructor': 'off',
        // TypeScript will handle resolving imports
        'import/no-unresolved': 'off',
        // Duplicate with @typescript-eslint/no-var-requires
        'global-require': 'off',
        // TypeScript strict typing system replaces this rule
        'react/require-default-props': 'off',
        // TypeScript already checks undefined declarations
        'react/jsx-no-undef': 'off',
      },
    },
  ],
};
