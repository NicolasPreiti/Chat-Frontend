module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: [
      'error',
      'always'
    ],
    indent: [
      'error', 2
    ],
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
  },
};
