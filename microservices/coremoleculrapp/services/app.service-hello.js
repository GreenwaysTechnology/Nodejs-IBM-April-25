const { ServiceBroker } = require('moleculer')

//create Broker(Container) instance
const broker = new ServiceBroker()

//create Service
broker.createService({
    name: 'hello',
    //biz logic 
    actions: {
        //biz logic
        sayHello() {
            return 'Hello'
        }
    }
})

//main function
async function main() {
    //start the broker : broker is not web server, just runtime.
    try {
        await broker.start()
        //invoke service methods
        const result = await broker.call('hello.sayHello')
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
main()
