const { ServiceBroker } = require('moleculer');


const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000 // 5000 ms is default timeout for all services defined in this broker
});

broker.createService({
    name: 'calculator',
    actions: {
        multiply: {
            handler(ctx) {
                const { a, b } = ctx.params
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, 3000, `${a + b} - ${broker.nodeID} `)
                })
            }
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();