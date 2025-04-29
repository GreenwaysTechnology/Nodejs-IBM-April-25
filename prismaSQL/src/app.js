const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.use('/api/users', require('./routers/user.router'))

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})

