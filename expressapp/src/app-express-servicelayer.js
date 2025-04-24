const express = require('express')
const { findAll } = require('./services/customer.service')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.end('Home')
})
app.get('/api/customers', async (req, res) => {
    try {
        const customers = await findAll()
        res.json(customers)
    }
    catch (err) {
        res.json({ err: err })
    }
})

const server = app.listen(PORT, () => {
    console.log(`Express Server is Running at ${server.address().port}`)
})
