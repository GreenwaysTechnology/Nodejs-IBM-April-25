const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

//create middleware with parameter
const middleware = (param) => {
    //middleware logic as higher order function
    return (req, res, next) => {
        console.log(`Parameter ${param}`)
        next()
    }
}

//attach middleware
// app.use('/api/hello', middleware('Hello'))

// app.get('/api/hello', (req, res) => {
//     res.json({ message: 'middleware' })
// })


app.get('/api/hello', middleware('hello params'), (req, res) => {
    res.json({ message: 'middleware' })
})

const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
