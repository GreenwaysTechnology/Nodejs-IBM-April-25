const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3000
const app = express()

//Register BodyParser Middleware
app.use(bodyParser.json())

app.use('/api/customers', require('./routers/customer.router'))
app.use('/api/products', require('./routers/products.router'))

app.get('/', (req, res) => {
    res.end('Home')
})

const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
