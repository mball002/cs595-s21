const express = require('express')
const { exec } = require('child_process')

const app = express()

const COMMAND = 'open /Applications/Dictionary.app'

app.put('/', (req, res) => {
  exec(COMMAND, err => {
   // res.set('Access-Control-Allow-Origin', '*')
    if (err) res.status(500).send(err)
    else res.status(200).send('Success')
  })
})

app.listen(4000,'127.0.0.1')
