module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // eslint for vue files wants indent of 2 spaces. I want 4!
    'indent': ["error", 4],
    // uneven spacing in json
    // 'object-curly-spacing': 1,
  },
  "env": { // by default, localStorage is not defined. Specify environments and it allows it.
    "browser": true,
    "node": true,
    "es6": true
  }
}
