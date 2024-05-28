module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['standard', 'eslint:recommended', 'next/core-web-vitals'],
  // add your custom rules here
  rules: {
    /**
     * Changed no-unused-vars for the typescript version for enum warnings handling
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'space-before-function-paren': 'off',
    'import/order': [
      2,
      {
        groups: ['external', 'sibling', 'parent'],
        pathGroups: [
          {
            pattern: '@schoolmouv/**',
            group: 'internal',
            position: 'before'
          }
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'multiline-ternary': 'off',
    indent: 'off'
  }
}
