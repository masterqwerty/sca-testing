const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('Hello World!')
})

app.listen(8080, () => {
  console.log('Started app on port 8080')
})
