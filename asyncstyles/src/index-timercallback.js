//async function: Hof is going to become listener function

function sayHello(hello) {
    //register higher order function as listener/callback function
    setTimeout(hello,5000)
}
function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    sayHello(() => {
        console.log('hello')
    })
    blockMe('end')
}
main()