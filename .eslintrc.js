module.exports = {
  plugins: [
    'security',
    'scanjs'
  ],
  extends: [
    'standard',
    'plugin:security/recommended',
    'plugin:scanjs/recommended'
  ]
}
