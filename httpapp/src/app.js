const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
    // Specify the file to be sent
    const filePath = path.join(__dirname, 'uploaded_file.txt');

    // Check the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
            return;
        }
        // Set headers
        res.writeHead(200, {
            'Content-Type': 'text/plain', // Change this based on file type
            'Content-Disposition': 'attachment; filename="uploaded_file.txt"', // Suggests a download
        });

        // Create a readable stream and pipe it to the response
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

        // Handle stream errors
        fileStream.on('error', (streamErr) => {
            console.error('Stream error:', streamErr);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server error while reading the file');
        });
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});