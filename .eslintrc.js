module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'decorator-position'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:decorator-position/ember'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'keyword-spacing': 'error',
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'indent': ['error', 2,],
    'no-mixed-spaces-and-tabs': [
      'error',
    ],
    'no-multi-spaces': [
      'error',
    ],
    'space-infix-ops': 'error',
    'linebreak-style': [
      'error',
      'windows',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'eqeqeq': [
      'warn',
      'always',
    ],
    'no-unused-vars': [
      'off', {
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '^_',
      },
    ],
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    'no-undef': 'error',
  },
};
