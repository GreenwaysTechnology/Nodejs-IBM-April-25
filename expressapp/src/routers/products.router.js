const express = require('express')
const { findAll } = require('../services/product.service')
const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    try {
        const products = await findAll()
        res.json(products)
    }
    catch (err) {
        res.json({ err: err })
    }
})

module.exports = productRouter