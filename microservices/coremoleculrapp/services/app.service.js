const { ServiceBroker } = require('moleculer')

//create Broker(Container) instance
const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        //syntax 1: 
        add(ctx) {
            const { a, b } = ctx.params
            return a + b
        },
        //syntax 2:
        multiply: {
            //extra configuration for this method
            //validation rules for input params
            // params: {
            //     a: "number",
            //     b: "number"
            // },
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
        const add = await broker.call('math.add', { a: 10, b: 20 })
        const multiply = await broker.call('math.multiply', { a: 10, b: 30 })
        console.log(`Add ${add} Multiply ${multiply}`)
    }
    catch (err) {
        console.log(err)
    }
}
main()
