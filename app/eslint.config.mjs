import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: false,
  unocss: true,
  vue: true,
  // Additional custom ESLint configuration
  /*eslintOptions: {
    rules: {
      'no-console': 'warn', // Example: Warn for console.log usage
      'vue/no-unused-vars': 'error', // Example: Error for unused Vue variables
    },
    // Example: Specific rules for Vue files
    overrides: [
      {
        files: ['*.vue'],
        rules: {
          'vue/multi-word-component-names': 'off',
        },
      },
    ],
  },*/
})
