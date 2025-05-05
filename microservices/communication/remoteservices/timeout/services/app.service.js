const { ServiceBroker } = require('moleculer');


const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000 // 5000 ms is default timeout for all services defined in this broker
});

broker.createService({
    name: 'math',
    actions: {
        multiply: {
            fallback: 'getFallbackResult',
               async handler(ctx) {
                const { a, b, timeout } = ctx.params
                let res = await ctx.call('calculator.multiply', { a, b }, {
                    timeout: timeout
                })
                console.log(`${res}`)
                return res
            }
        }
    },
    methods: {
        getFallbackResult() {
            return 0
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();