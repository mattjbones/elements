// .eslintrc.js
module.exports = {
  extends: [
    //
    'eslint:recommended'
  ],
  plugins: ['vue'],
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 6
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jasmine": true
  },
  "ecmaFeatures": {
    "modules": true,
    "spread": true,
    "restParams": true
  },
  globals: {
    chrome: false,
    browser: false
  }
}