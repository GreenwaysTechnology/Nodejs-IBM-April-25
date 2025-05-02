const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

//start web server/container
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
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