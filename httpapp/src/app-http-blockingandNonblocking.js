const http = require('node:http')
const { findAll } = require('./services/todo.service')

const PORT = 3000
//create server
//BLOCKING API
// const server = http.createServer((req, res) => {
//     const jsonData = JSON.stringify(findAll())
//     //set contentType header
//     res.writeHead(200, {
//         'Content-Type': 'application/json',
//     });
//     res.end(jsonData)
// })
//Nonblocking version: callback
// const server = http.createServer((req, res) => {
//     findAll((todos) => {
//         res.writeHead(200, {
//             'Content-Type': 'application/json',
//         });
//         let jsonData = JSON.stringify(todos)
//         res.end(jsonData)
//     })
// })
// //NonBlocking version: Promise with then and catch
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application/json',
//     });
//     findAll().then(todos => {
//         let jsonData = JSON.stringify(todos)
//         res.end(jsonData)
//     }).catch(err => {
//         res.end(JSON.stringify({ err: err }))
//     })
// })

//Non blocking version : Promise with async and await
const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    try {
        const todos = await findAll()
        let jsonData = JSON.stringify(todos)
        res.end(jsonData)
    }
    catch (err) {
        res.end(JSON.stringify({ err: err }))
    }

})
//start server
server.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`)
})

//server events
server.on('request', (req, res) => {
    console.log(new Date(), "URL is :: ", req.url, "method::", req.method)
})