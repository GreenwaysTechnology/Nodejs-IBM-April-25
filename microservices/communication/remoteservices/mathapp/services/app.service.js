const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: 'TCP',
    registry: {
        discoverer: "redis://localhost:6379",
        strategy:"RoundRobin"
    }
})

// const broker = new ServiceBroker({
//     transporter: "nats://localhost:4222"
// })

//service 1
broker.createService({
    name: 'math',
    actions: {
        multiply: {
            handler(ctx) {
                const { a, b } = ctx.params
                //call remote service
                return ctx.call('calculator.multiply', { a: a, b: b })
            }
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