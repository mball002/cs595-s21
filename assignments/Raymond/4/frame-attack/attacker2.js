const express = require('express')
const { createReadStream } = require('fs')
const app = express()
const port = 4004

app.get('/', (req, res) => {
  res.sendFile('/attacker2.html', {root: __dirname })
})
app.listen(port, () => {
  console.log(`Attacker 2 listening at http://localhost:${port}`)
})