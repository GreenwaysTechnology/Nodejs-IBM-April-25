const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

//hello serice
//http://localhost:3000/hello/sayHello

broker.createService({
    name: 'hello',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello Rest'
            }
        }
    }
})

//start web server/container
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api'
            }
        ]
    }

})

async function main() {
    try {
        await broker.start()
        broker.repl()
    } catch (err) {
        console.log(err)
    }
}
main()