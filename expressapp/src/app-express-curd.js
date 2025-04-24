const express = require('express')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.end('Home')
})

app.get('/api/customers',(req,res)=>{
    res.end('customers -get')
})
app.post('/api/customers',(req,res)=>{
    res.end('customers -post')
})
app.put('/api/customers',(req,res)=>{
    res.end('customers -put')
})
app.delete('/api/customers',(req,res)=>{
    res.end('customers -delete')
})

app.listen(PORT, () => {
    console.log(`Express Server is Running at ${PORT}`)
})
