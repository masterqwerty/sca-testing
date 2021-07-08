const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new', (req, res) => {
  res.send('This is a different path.')
})

module.exports = app
