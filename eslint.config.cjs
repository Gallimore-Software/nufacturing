// eslint.config.cjs
const js = require('@eslint/js');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  // Basic ESLint configuration with recommended settings
  js.configs.recommended,

  // TypeScript-specific configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // JavaScript-specific configuration
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },

  // Add ignores at the top level to exclude .spec.ts files
  {
    ignores: ['**/*.spec.ts'],
  },
];
