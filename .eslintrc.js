module.exports = {
  root: true,
  env: {
    node: true
  },
  // "vue/comment-directive": ["error", {
  //   "reportUnusedDisableDirectives": false
  //   }],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/comment-directive': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
