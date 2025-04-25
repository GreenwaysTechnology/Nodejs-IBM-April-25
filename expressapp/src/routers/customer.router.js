const express = require('express')

const { findAll, findById, save } = require('../services/customer.service')

const customerRouter = express.Router()

//middlware 
customerRouter.use(function(req,res,next){
    console.log('customer router url with any method')
    next()
})
customerRouter.get('/', function (req, res, next) {
    console.log('customer get middleware')
    res.set({
        'customer': 'CUSTOMER GET'
    })
    next()
})


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
//query parameter
customerRouter.get('/filter', async (req, res) => {
    const params = req.query
    console.log(params)
    return res.json(params)
})
//path parameter
customerRouter.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const customer = await findById(id)
        res.json(customer)
    }
    catch (err) {
        res.json({ err: err })
    }
})
//Post 
customerRouter.post('/', async (req, res) => {
    try {
        //read customers
        let data=''
        req.on('data',(chunk)=>{
            data+=chunk
        })
        req.on('end',async ()=>{
            const customer = await save(data)
            res.status(201).json(customer)
        })
    }
    catch (err) {
        res.json({ err: err })
    }
})


module.exports = customerRouter