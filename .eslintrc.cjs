/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  ignorePatterns: ['**/*.gen.*'],
  extends: ['@nuxtjs/eslint-config-typescript', '@vue/eslint-config-prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'vue/require-default-prop': 'off',
    'import/no-named-as-default-member': 'off',
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'max-len': ['off', { code: 120 }],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-new': 'off',
    'func-style': ['error', 'expression'],
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'pathGroups': [
          {
            pattern: '@/components/Shared/*',
            group: 'internal',
            position: 'before'
          }
        ],
        'alphabetize': { order: 'asc', caseInsensitive: true }
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'no-void': 'off',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'EVENTS',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'warn',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false
      }
    ],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-dupe-keys': [
      'error',
      {
        groups: []
      }
    ],
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'no-plusplus': 'off',
    'no-unused-vars': 'warn',
    'semi': ['error', 'never'],
    'quotes': ['warn', 'single'],
    'indent': 'off',
    'comma-dangle': [
      'warn',
      {
        arrays: 'never',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    // пробелы в массивах, кроме...
    'array-bracket-spacing': [
      'warn',
      'never',
      {
        singleValue: false,
        arraysInArrays: false,
        objectsInArrays: false
      }
    ],
    'object-curly-spacing': 'off',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'always'],
    'linebreak-style': ['warn', 'unix'],
    'vue/no-multiple-template-root': 'off',
    'import/named': 'off'
  }
}
