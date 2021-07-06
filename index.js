const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/path', (req, res) => {
  res.send('This is a different path.')
})

app.listen(8080, () => {
  console.log('Started app on port 8080')
})
