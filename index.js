const express = require('express')
const app = express()
const PORT = 3000 | process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Hello World!')
  })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})