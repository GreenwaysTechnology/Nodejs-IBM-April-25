const fs = require('node:fs')
const path = require('node:path')

function read() {
    let filePath = path.join(__dirname, 'assets/info.txt')
    let options = {
        encoding: 'UTF-8'
    }
    const inputStream = fs.createReadStream(filePath, options)

    //attach stream listeners
    let data = ''
    inputStream.on('data', (chunk) => {
        //
        data += chunk
    })
    inputStream.on('end', () => {
        console.log('there is no more')
        console.log(data)
    })
    inputStream.on('close', () => {
        console.log('close ')
    })
    inputStream.on('error', (err) => {
        console.log(err)
    })
}

function main() {
    read()
}
main()