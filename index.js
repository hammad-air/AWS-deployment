const express = require('express')
const app = express()
const PORT = 3000 | process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello what about you?')
  })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
