const TODOS = require('../mock-data/todos')

class TodoService {
    //biz logic
    //blocking api
    // findAll() {
    //     return TODOS
    // }
    // //Nonblocking : using callbacks
    // findAll(resolve){
    //     setTimeout(resolve,1000,TODOS)
    // }
    //Nonblocking : using Promises
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, TODOS)
        })
    }
    save(data) {
        //write data
        console.log(data)
        //return promise 
        return Promise.resolve('data has been written')
    }
}

module.exports = new TodoService()