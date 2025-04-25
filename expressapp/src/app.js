require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const corsOptions = {
    origin: 'http://www.abce.com'
}
const PORT = process.env.PORT || 3000

//enabled default cors
app.use(cors(corsOptions))
// app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.end('Home Page')
})

app.get('/api/customers/:id', (req, res) => {
    res.json({ msg: 'cors enabled for only this particular' })
})

//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
