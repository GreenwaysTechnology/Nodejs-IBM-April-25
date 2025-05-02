const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello!';
        },
        sayHai() {
            return 'Hai!';
        },
        sayGreet() {
            return 'Greet!';
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
                path: '/api',
                aliases: {
                    "hello": "greeter.sayHello",
                    "hai": "greeter.sayHai",
                    "greet": "greeter.sayGreet"
                }
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