const fs = require('node:fs')

function blockMe(message) {
    console.log(message)
}
function read() {
    let path = './src/assets/info.txt'
    let options = {
        encoding: 'UTF-8'
    }
    const data = fs.readFileSync(path, options)
    console.log(data)

}

function main() {
    blockMe('start')
    read()
    blockMe('end')
}
main()