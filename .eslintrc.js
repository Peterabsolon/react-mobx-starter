module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'simple-import-sort'],

  rules: {
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'prefer-const': 'error',
    'no-shadow': 'error',
    'react/react-in-jsx-scope': 'off',

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // external NPM packages
          ['^@?\\w'],

          // separate root ~/ imports
          ['^~?\\w'],

          // separate './' and '../' imports
          ['^\\../'],
          ['^\\./'],
        ],
      },
    ],
  },
}
