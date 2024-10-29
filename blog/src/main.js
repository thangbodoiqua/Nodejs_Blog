const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/trangchu', (req, res) => {
  res.send('<h2 style = "color: blue"> Hello World! </h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})