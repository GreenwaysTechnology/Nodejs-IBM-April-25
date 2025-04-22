//sync work flow //blocking flow
function sayHello() {
    console.log('hello')
}
function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    sayHello()
    blockMe('end')
}
main()