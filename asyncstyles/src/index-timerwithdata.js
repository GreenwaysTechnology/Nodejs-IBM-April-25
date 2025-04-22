//async function: Hof is going to become listener function

function sayHello(hello) {
    //register higher order function as listener/callback function
    //setTimeout(hello,5000,'Hello,From Node.js')
    setTimeout(() => {
        hello('Hello,How are you')
    }, 5000)
}
function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    sayHello((message) => {
        console.log(message)
    })
    blockMe('end')
}
main()