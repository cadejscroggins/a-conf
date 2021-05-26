module.exports = {
  env: { browser: true, 'jest/globals': true },
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  parser: '@babel/eslint-parser',
  plugins: ['prettier', 'jest'],
  rules: {
    curly: ['error', 'multi-line'],
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-new': 'off',
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/prop-types': 'off',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }],
  },
};
