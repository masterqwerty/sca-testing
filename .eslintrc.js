module.exports = {
  plugins: [
    'security',
    'scanjs'
  ],
  extends: [
    'standard',
    'plugin:security/all',
    'plugin:scanjs/all'
  ]
}
