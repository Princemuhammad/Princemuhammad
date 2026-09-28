const expoConfig = require('eslint-config-expo/flat');

module.exports = [
  ...expoConfig,
  {
    ignores: ['dist/**', 'dist-web/**', 'android/**', 'ios/**'],
  },
];
