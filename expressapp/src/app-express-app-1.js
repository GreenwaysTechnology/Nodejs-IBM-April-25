const express = require('express')

const PORT = 3000
const app = express()


//REST API
app.get('/', (req, res) => {
    res.end('Home')
})


app.listen(PORT, () => {
    console.log(`Express Server is Running at ${PORT}`)
})
