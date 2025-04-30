const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: 'TCP'
// })
const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})
//service 2
broker.createService({
    name: 'calculator',
    actions: {
        multiply(ctx) {
            //need to call math
            const { a, b } = ctx.params
            return a * b
        }
    }
})


async function main() {
    try {
        //start the broker 
        await broker.start()
        //use repl prompt
        broker.repl()

    } catch (err) {
        console.log(err)
    }
}
main()