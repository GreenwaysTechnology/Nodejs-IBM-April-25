const EventEmitter = require('node:events')

//Application Events

class Sales extends EventEmitter {
    constructor() {
        super()
        //register events
        this.on('sold', (evt) => {
            console.log(evt)
        })
    }
    //biz method which emits event sold event
    sale(product) {
        //once the sale method is called, emit event
        this.emit('sold', product)
    }
}


function main() {
    let sales = new Sales()
    sales.sale({ id: 1, name: 'Product', qty: 100, price: 233434.89 })
}
main()