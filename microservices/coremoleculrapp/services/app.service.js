const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    created(broker) {
        console.log('broker created')
    },
    started(broker) {
        console.log('broker started')
    },

    stopped(broker) {
        console.log('broker is stopped')
    }
})
broker.createService({
    name: 'math',
    actions: {
        //public method
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
                //invoke private methods
                return this.multiply(a, b)
            }
        }
    },
    methods: {
        //to define private methods
        multiply(a, b) {
            return a * b
        }
    },
    //life cycle methods
    created() {
        console.log('service is created')
    },
    merged() {
        console.log('service is merged')
    },
    async started() {
        console.log('service is started ')
    },
    async stoped() {
        console.log('service is stopped')
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
