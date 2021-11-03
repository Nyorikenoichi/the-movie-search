module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single']
  }
};
