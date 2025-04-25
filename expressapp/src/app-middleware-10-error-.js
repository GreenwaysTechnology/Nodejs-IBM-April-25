const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

//register error hanlding middleware
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error'
        }
    })
})
//Normal route
app.get('/', (req, res) => {
    res.json({ message: 'Hello' })
})

//error Handler
app.get('/api/greet/:message', (req, res, next) => {
    const message = req.params.message
    if (message === 'hello') {
        res.status(200).json({ message })
    } else {
        const err = new Error('Your Input is not valid')
        err.status = 400
        next(err)
    }
})



const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
