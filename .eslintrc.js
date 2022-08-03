module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
  },
  ignorePatterns: ['tests', 'setupTests.js', '*.test.js', 'migrations', 'models'],
};
