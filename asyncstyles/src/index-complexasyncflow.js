
//resolve means success, reject means failure
function login(userName, password, resolve, reject) {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}

function main() {
    login('admin', 'admin', (res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })

    login('admin', 'bar', (res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })
}
main()