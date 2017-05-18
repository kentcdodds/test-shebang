var CLIEngine = require('eslint').CLIEngine
var eslint = new CLIEngine({
  env: {},
  fix: true,
  globals: [],
  parser: '',
  parserOptions: {},
  plugins: ['node'],
  root: true,
  rules: {
    'node/shebang': 'error',
  },
  useEslintrc: false,
})

var result = eslint.executeOnText('#!/usr/bin/env node\nconsole.log("Hello, world!");')
console.log(result)
