const http = require('node:http')

const PORT = 3000
//create server
const server = http.createServer((req, res) => {
    let data = {
        message: 'Hello'
    }
    let jsonData = JSON.stringify(data)
    //set contentType header
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.write(jsonData)
    res.end()
})

//start server
server.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})

//server events
server.on('request', (req, res) => {
    console.log(new Date(), "URL is :: ", req.url, "method::", req.method)
})