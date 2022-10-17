module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-parsing-error': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-prototype-builtins': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-dupe-keys': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-constant-condition': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-fallthrough': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-irregular-whitespace': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
