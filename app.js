const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const { name } = req?.query
  const response = typeof name === 'string' ? { message: `Hi ${name}` } : { message: 'it is not a string' }
  res.json(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})