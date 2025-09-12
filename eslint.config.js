// ESLint v9 flat config
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const jestPlugin = require('eslint-plugin-jest');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  // Ignored paths (replaces .eslintignore)
  {
    ignores: ['node_modules', 'lib', 'coverage'],
  },

  // Bring in recommended rule sets via compat
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended'),

  // Project-specific settings
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      jest: jestPlugin,
    },
    rules: {
      // Add project-specific overrides here if needed
    },
  },
];
