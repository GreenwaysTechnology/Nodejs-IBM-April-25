const express = require('express')

const { findAll } = require('../services/customer.service')

const customerRouter = express.Router()

//apis
customerRouter.get('/', async (req, res) => {
    try {
        const customers = await findAll()
        res.json(customers)
    }
    catch (err) {
        res.json({ err: err })
    }
})


module.exports = customerRouter