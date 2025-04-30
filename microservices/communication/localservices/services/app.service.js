const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        multiply: {
            handler(ctx) {
                const { a, b } = ctx.params
                //call calculator service
                return ctx.call('calculator.multiply', { a, b })
            }
        }
    }
})
broker.createService({
    name: 'calculator',
    actions: {
        multiply: {
            handler(ctx) {
                const { a, b } = ctx.params
                return a * b
            }
        }
    }
})



async function main() {
    try {
        await broker.start()
        //will start interactive commandline tool
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()