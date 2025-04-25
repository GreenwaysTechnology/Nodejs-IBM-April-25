const express = require('express')
// const customerRouter = require('./routers/customer.router')
const PORT = 3000
const app = express()

//bind the router with router
// app.use('/api/customers',customerRouter)
app.use('/api/customers', require('./routers/customer.router'))
app.use('/api/products', require('./routers/products.router'))

app.get('/', (req, res) => {
    res.end('Home')
})

const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
