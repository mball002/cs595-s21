const express = require('express')
const app = express()
const { createReadStream } = require('fs')
const port = 5000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.set('Access-Control-Expose-Headers', '*')
    res.set('X-CS595s21-artist', 'Kanye West')
    res.set('X-CS595s21-movie', 'The Dark Knight')
    res.set('X-CS595s21-videogame', 'God of War')
    res.send("<html><title>YES Headers</title><h1>YES headers</h1></html>")
})

app.listen(port, () => {
  console.log(`Server 3 (YES headers) listening at http://localhost:${port}`)
})

app.use(express.static('files'))