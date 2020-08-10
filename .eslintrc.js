module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    indent: ['error', 2],
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { after: true }],
    'space-infix-ops': 'error',
    'no-extra-parens': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-else-return': 'error',
    'no-multi-spaces': 'error',
    'no-useless-return': 'error',
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'array-bracket-spacing': ['error', 'always', { objectsInArrays: false }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  },
  settings: {
    'import/resolver': { typescript: {} }
  }
}
