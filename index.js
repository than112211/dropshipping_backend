const express = require('express')
const app = express()
const port = 4000

app.get('/a', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`CHAY THANH CONG: ${port}`)
})