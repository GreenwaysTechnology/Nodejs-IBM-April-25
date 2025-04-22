//higher order function: passing function as parameter

function sayHello(hello) {
    hello()
}
function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    // sayHello(function () {
    //     console.log('hello')
    // })
    sayHello(() => {
        console.log('hello')
    })
    blockMe('end')
}
main()