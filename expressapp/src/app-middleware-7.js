const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

app.get('/api/hello', (req, res, next) => {
    console.log('middleware 1')
    next()
}, (req, res, next) => {
    console.log('middleware 2')
    next()
}, (req, res, next) => {
    console.log('middleware 3')
    next()
})

app.get('/api/hello', (req, res) => {
    res.json({ message: 'middleware' })
})

const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
