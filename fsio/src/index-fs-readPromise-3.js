const fs = require('node:fs/promises')

async function read() {
    try {
        let path = './src/assets/info.txt'
        let options = {
            encoding: 'UTF-8'
        }
        const data = await fs.readFile(path, options)
        console.log(data)

    }
    catch (err) {
        console.log(err)
    }
}

async function main() {
   await read()
}
main()