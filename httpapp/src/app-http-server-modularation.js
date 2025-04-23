const http = require('node:http')
const { findAll } = require('./services/todo.service')

const PORT = 3000
//create server
const server = http.createServer((req, res) => {
    const jsonData = JSON.stringify(findAll())
    //set contentType header
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(jsonData)
})

//start server
server.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})

//server events
server.on('request', (req, res) => {
    console.log(new Date(), "URL is :: ", req.url, "method::", req.method)
})