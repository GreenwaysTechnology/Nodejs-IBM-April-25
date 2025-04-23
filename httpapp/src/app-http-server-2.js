const http = require('node:http')

const PORT = 3000
//create server
const server = http.createServer((req, res) => {
    //send response to the client
    res.write('Hello,Node')
    //close the the connection
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