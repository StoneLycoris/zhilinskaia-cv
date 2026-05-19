import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
    js.configs.recommended,

    ...tseslint.configs.recommendedTypeChecked,

    ...pluginVue.configs['flat/recommended'],

{
    files: ['**/*.vue'],

    languageOptions: {
    parser: vueParser,

    parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',

        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        },
    },

    plugins: {
        'simple-import-sort': simpleImportSort,
        prettier: eslintPluginPrettier,
    },

    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/component-api-style': ['error', ['script-setup']],

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'prettier/prettier': 'error',
    },
  },

  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',

        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: eslintPluginPrettier,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'prettier/prettier': 'error',
    },
  },

    eslintConfigPrettier,
]