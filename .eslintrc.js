module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
    '@nuxtjs'
  ],
  parser: 'vue-eslint-parser',
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}
