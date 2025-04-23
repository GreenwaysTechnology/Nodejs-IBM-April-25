const fs = require('node:fs/promises')
const path = require('node:path')

async function write() {
    let filePath = path.join(__dirname, 'assets/content.txt')
    let options = {
        encoding: 'UTF-8'
    }
    let content = 'Hello, this is a node.js file write example'
    try {
        await fs.writeFile(filePath, content, options)
        console.log('File has been written successfully')
    }
    catch (err) {
        console.log(err)
    }
}

async function main() {
    await write()
}
main()