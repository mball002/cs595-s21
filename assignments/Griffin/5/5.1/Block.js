const express = require('express')
const { createReadStream } = require('fs')
var app = express();

app.get('/', (req, res) => {
    createReadStream('Results.json').pipe(res)
});

app.listen(8000)