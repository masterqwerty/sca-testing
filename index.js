const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new', (req, res) => {
  let something = "something"
  res.send('This is a different path.' something)
})

app.listen(8080, () => {
  console.log('Started app on port 8080')
})
