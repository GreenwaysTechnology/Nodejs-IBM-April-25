const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    logger: "Console",
    cacher: "redis://localhost:6379"
})

broker.createService({
    name: 'products',
    actions: {
        list: {
            cache: true,
            rest: "GET /",
            handler(ctx) {
                this.logger.info("Find All method is called")
                return "findAll Products"
            }
        },
        get: {
            rest: "GET /:id",
            handler(ctx) {
                return "get By Id"
            }
        },
        save: {
            rest: "POST /",
            handler(ctx) {
                return "Save"
            }
        },
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                return "update"
            }
        },
        remove: {
            rest: "DELETE /:id",
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
                },
                autoAliases: true
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