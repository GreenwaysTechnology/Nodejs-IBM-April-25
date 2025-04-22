
function blockMe(message) {
    console.log(message)
}
function getSuccessMessage() {
    return Promise.resolve('hello')
}
function main() {
    blockMe('start')
    getSuccessMessage().then(res => console.log(res))
    blockMe('end')
}
main()