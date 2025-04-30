const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        multiply: {
            params: {
                a: {
                    type: 'number',
                    positive: true,
                    integer: true
                }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a * b
            }
        }
    }
})

//main function
async function main() {
    //start the broker : broker is not web server, just runtime.
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()
