const { ServiceBroker } = require('moleculer')

//create Broker(Container) instance
const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        // add(ctx) {
        //     // const params = ctx.params
        //     // console.log(params)
        //     // return params.a + params.b
        //     const { a, b } = ctx.params
        //     return a + b
        // },
        add({ params: { a, b } }) {
            return a + b
        },
        multiply(ctx) {
            const params = ctx.params
            return params.a * params.b
        }
    }
})

//main function
async function main() {
    //start the broker : broker is not web server, just runtime.
    try {
        await broker.start()
        const add = await broker.call('math.add', { a: 10, b: 20 })
        const multiply = await broker.call('math.multiply', { a: '10', b: 30 })
        console.log(`Add ${add} Multiply ${multiply}`)
    }
    catch (err) {
        console.log(err)
    }
}
main()
