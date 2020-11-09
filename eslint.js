module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    curly: ['error', 'multi-line'],
    'import/no-dynamic-require': 'off',
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