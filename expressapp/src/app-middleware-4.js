const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

const haiMiddleware = (req, res, next) => {
    console.log('hai middleware')
    next()
}

app.get('/api/hello', (req, res, next) => {
    console.log('hello middleware')
    next()
}, (req, res) => {
    res.json({ message: 'middleware' })
})

//without using "use" method still we can register middleware

app.get('/api/hai', haiMiddleware, (req, res) => {
    res.json({ message: 'middleware' })
})

const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
