const { configs } = require('eslint-plugin-vue');

module.exports = [
  {
    files: ['*.js', '*.vue'],
    ignores: ['node_modules/**', 'dist/**'], // Ensure ignored paths are correctly listed here
    languageOptions: {
      // Use the default parser for JS
    },
    plugins: {
      vue: configs.essential, // Use the essential Vue configuration
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  },
];
