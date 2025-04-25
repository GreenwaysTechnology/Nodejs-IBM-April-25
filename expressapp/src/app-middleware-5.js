const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

const customMiddleware = (req, res, next) => {
    res.set({ 'secret': '222232ssfsfsdf' })
    next()
}

app.get('/api/hello', customMiddleware, (req, res) => {
    res.json({ message: 'middleware' })
})

//without using "use" method still we can register middleware

app.get('/api/hai', customMiddleware, (req, res) => {
    res.json({ message: 'middleware' })
})

const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
