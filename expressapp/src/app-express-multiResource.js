const express = require('express')
const customerService = require('./services/customer.service')
const productService = require('./services/product.service')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.end('Home')
})
app.get('/api/customers', async (req, res) => {
    try {
        const customers = await customerService.findAll()
        res.json(customers)
    }
    catch (err) {
        res.json({ err: err })
    }
})
//customer (resource) -post,delete,put


//products (resource)-get,post,delete,put

app.get('/api/products', async (req, res) => {
    try {
        const products = await productService.findAll()
        res.json(products)
    }
    catch (err) {
        res.json({ err: err })
    }
})
const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
