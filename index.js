const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new', (req, res) => {
  res.send('This is a different path.' + 2 + 3)
})

app.listen(8080, () => {
  console.log('Started app on port 8080')
})
