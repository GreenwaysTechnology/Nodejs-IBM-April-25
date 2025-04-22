import { Customer } from "./services/customer.service.js";

function main() {
    let cust = new Customer()
    console.log(cust.findAll())
}
main()