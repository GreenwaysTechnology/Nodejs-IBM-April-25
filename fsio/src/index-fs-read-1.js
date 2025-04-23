const fs = require('node:fs')


function blockMe(message) {
    console.log(message)
}
function read() {
    let path = './src/assets/info.txt'
    let options = {
        encoding: 'UTF-8'
    }
    fs.readFile(path, options, (err, data) => {
        if (err) throw err
        console.log(data)
    })
}

function main() {
    blockMe('start')
    read()
    blockMe('end')
}
main()