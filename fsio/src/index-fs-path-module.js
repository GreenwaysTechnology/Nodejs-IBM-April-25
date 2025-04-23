const fs = require('node:fs')
const path = require('node:path')

function read() {
    let filePath = path.join(__dirname, 'assets/info.txt')
    let options = {
        encoding: 'UTF-8'
    }
    fs.readFile(filePath, options, (err, data) => {
        if (err) throw err
        console.log(data)
    })
}

function main() {
    read()
}
main()