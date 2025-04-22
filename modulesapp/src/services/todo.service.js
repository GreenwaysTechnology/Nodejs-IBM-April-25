// exports.something ='something'

let a =10
class TodoService {

    findAll() {
        return [{ status: true, text: 'todo' }]
    }
}
//share class
// module.exports = TodoService
//share object of the class
module.exports = new TodoService()
// module.exports = a