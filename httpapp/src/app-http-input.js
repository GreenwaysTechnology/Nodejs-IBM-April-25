const http = require('node:http')
const { save } = require('./services/todo.service')

const PORT = 3000
//create server
const server = http.createServer((req, res) => {
    //read data.
    let data = ''
    req.on('data', async (chunk) => {
        data += chunk
    })
    req.on('end', async () => {
        try {
            const result = await save(data)
            res.end(result)
        }
        catch (err) {
            console.log(err)
            res.end("Something went wrong")
        }
    })
})

//start server
server.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})

//server events
server.on('request', (req, res) => {
    console.log(new Date(), "URL is :: ", req.url, "method::", req.method)
})