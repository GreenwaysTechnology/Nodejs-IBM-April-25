
function blockMe(message) {
    console.log(message)
}
function getErrorMessage() {
    return Promise.reject('something went wrong')
}
function main() {
    blockMe('start')
    getErrorMessage().catch(err => console.log(err))
    blockMe('end')
}
main()