module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/essential',
    'eslint:recommended',
    require.resolve('./recommended')
  ],

  overrides: [{
    files: ['test/**.spec.js'],
    env: {
      jest: true
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off'
    }
  }]
}
