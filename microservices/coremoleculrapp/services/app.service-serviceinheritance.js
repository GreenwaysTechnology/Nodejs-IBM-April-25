const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//parent services
const hello = {
    name: 'hello',
    actions: {
        sayHello() {
            return "Hello"
        }
    }
}
const hai = {
    name: 'hai',
    actions: {
        sayHai() {
            return "Hai"
        }
    }
}

broker.createService({
    mixins: [hello, hai],
    name: 'greeter',
    actions: {
        sayGreet(){
            return 'Greet'
        }
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
