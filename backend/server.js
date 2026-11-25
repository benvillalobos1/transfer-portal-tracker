const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'frontend')))

app.get('/api/entries', (req, res) => {
    res.json([])
})

app.listen(3001, () => {
    console.log('Running at http://localhost:3001')
})