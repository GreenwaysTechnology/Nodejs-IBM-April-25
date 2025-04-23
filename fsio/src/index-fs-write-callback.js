const fs = require('node:fs')
const path = require('node:path')

function write() {
    let filePath = path.join(__dirname, 'assets/content.txt')
    let options = {
        encoding: 'UTF-8'
    }
    let content = 'Hello, this is a node.js file write example'
    fs.writeFile(filePath, content, options, (err) => {
        if (err) {
            console.log('Error writing file :', err)
            return;
        }
        console.log('File has been written successfully!')
    })
}

function main() {
    write()
}
main()