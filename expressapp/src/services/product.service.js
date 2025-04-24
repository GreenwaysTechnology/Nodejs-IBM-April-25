
const PRODUCTS = [{
    id: 1,
    name: 'Product1',
    qty: 100,
    price: 23

},
{
    id: 2,
    name: 'Product2',
    qty: 32,
    price: 100

}
]

class ProductService {

    findAll() {
        return PRODUCTS
    }
}

module.exports = new ProductService()