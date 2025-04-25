const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

//attach middleware for /api/hello url

app.use('/api/hello', (req, res, next) => {
    //middleware code
    console.log('hello middleware')
    //move on to next cycle
    next()
})

app.get('/api/hello', (req, res) => {
    res.end('Hello')
})

const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
