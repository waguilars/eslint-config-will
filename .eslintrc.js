module.exports = {
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1,
    semi: [1, 'always'],
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1
  }
};
