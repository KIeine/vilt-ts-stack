module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parserOptions: {
    parser: { ts: '@typescript-eslint/parser' },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // 'import/prefer-default-export': 'off',
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // 'import/extensions': ['error', 'ignorePackages'],
    'no-unused-vars': 'warn',
  },
}
