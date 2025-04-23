const fs = require('node:fs')


function blockMe(message) {
    console.log(message)
}
function read() {
    return new Promise((resolve, reject) => {
        let path = './src/assets/info.txt'
        let options = {
            encoding: 'UTF-8'
        }
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

async function main() {
    blockMe('start')
    //read().then(data=>console.log(data)).catch(err=>console.log(err))
    const data = await read()
    console.log(data)
    blockMe('end')
}
main()