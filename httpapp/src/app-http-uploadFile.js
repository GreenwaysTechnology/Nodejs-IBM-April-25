
//Upload file from client
const { createServer } = require('node:http');
const fs = require('node:fs');

const PORT = 3000

//http- Server - receive input from the client(request) and send response to the client
//input -io - response - output 
// req -

const server = createServer((req, res) => {
    if (req.method === 'POST') {
        const fileStream = fs.createWriteStream('uploaded_file.txt');
        req.pipe(fileStream)
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('File uploaded successfully!');
        });

    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST method is supported');
    }

})

server.listen(PORT, () => {
    console.log(`Http Server is Running!`)
})