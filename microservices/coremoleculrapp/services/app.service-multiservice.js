const { ServiceBroker } = require('moleculer')

//create Broker(Container) instance
const broker = new ServiceBroker()

//create Service
broker.createService({
    name: 'greet',
    //biz logic 
    actions: {
        //biz logic
        sayHello() {
            return 'Hello'
        },
        sayHai() {
            return 'Hai'
        },
        sayGreet() {
            return 'Greet'
        }
    }
})

broker.createService({
    name: 'math',
    actions: {
        add() {
            return 10 + 10
        },
        multiply() {
            return 10 * 10
        }
    }
})

//main function
async function main() {
    //start the broker : broker is not web server, just runtime.
    try {
        await broker.start()
        //invoke service methods
        const hello = await broker.call('greet.sayHello')
        const hai = await broker.call('greet.sayHai')
        const greet = await broker.call('greet.sayGreet')

        const add = await broker.call('math.add')
        const multiply= await broker.call('math.multiply')
        console.log(hello, hai, greet)

        console.log(`Add ${add} Multiply ${multiply}`)
    }
    catch (err) {
        console.log(err)
    }
}
main()
