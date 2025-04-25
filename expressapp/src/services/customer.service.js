
const CUSTOMERS = [{
    id: 1,
    name: 'Subramanian',
},
{
    id: 2,
    name: 'Murugan',
}
]
class CustomerService {

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, CUSTOMERS)
        })
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            const customer = CUSTOMERS.find(customer => customer.id === id)
            if (customer) {
                setTimeout(resolve, 1000, customer)
            } else {
                setInterval(reject, 1000, { message: 'No Customer Found' })
            }
        })
    }
    save(customer) {
        return Promise.resolve(customer)
    }
}
module.exports = new CustomerService()