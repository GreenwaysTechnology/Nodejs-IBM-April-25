module.exports = {
    name: 'product',
    actions: {
        list() {
            // return Promise.resolve([{
            //     id: 1,
            //     name: 'Product1',
            //     price: 100,
            //     qty: 1000
            // }])
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 1000, [{ id: 1, name: 'p1' }])
            })
        }
    }
}