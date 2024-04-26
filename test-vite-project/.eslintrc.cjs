module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'template-curly-spacing': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'no-debugger': 'error',
    'prettier/prettier': 'error',
    'no-duplicate-imports': 0,
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/no-unresolved': 'error',
    'import/no-named-as-default-member': 0,
    'import/first': 'warn',
    'import/newline-after-import': ['warn', { count: 1 }],
    'import/prefer-default-export': 'off',
    'import/group-exports': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '@mui/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@',
            group: 'internal',
            position: 'before',
          },
        ],
        'newlines-between': 'always-and-inside-groups',
        pathGroupsExcludedImportTypes: ['external'],
        groups: [
          'external',
          'unknown',
          'internal',
          ['sibling', 'parent'],
          'builtin',
          'index',
          'object',
          'type',
        ],
      },
    ],
    curly: 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'class',
          'const',
          'continue',
          'debugger',
          'default',
          'do',
          'empty',
          'for',
          'function',
          'if',
          'iife',
          'import',
          'let',
          'return',
          'switch',
          'throw',
          'try',
          'var',
          'while',
          'with',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'import', 'export'],
        next: ['const', 'let', 'var', 'import', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['*'],
        next: ['return'],
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: false,
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
      },
    ],
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    '!.*',
    'src/generated/',
    '.yalc',
    '**/*.d.ts',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
