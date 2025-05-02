const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

broker.createService({
    name: 'products',
    actions: {
        list: {
            handler(ctx) {
                return "findAll Products"
            }
        },
        get: {
            handler(ctx) {
                return "get By Id"
            }
        },
        save: {
            handler(ctx) {
                return "Save"
            }
        },
        update: {
            handler(ctx) {
                return "update"
            }
        },
        remove: {
            handler(ctx) {
                return "remove"
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
                path: '/api',
                aliases: {
                    // "GET products": "products.list",
                    // "GET products/:id": "products.get", //products/1 products/2 
                    // "POST products": "products.create",
                    // "PUT products/:id": "products.update",
                    // "DELETE products/:id": "products.remove",
                    "REST products": "products"


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