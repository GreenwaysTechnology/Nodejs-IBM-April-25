const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin'
        }
        //user = null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User Not found')

        }
    })
}
//login
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        //biz logic
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')

        }
    })
}
//dashboard
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        //biz logic
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'Welcome to Dashboard')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest Page')

        }
    })
}

function main() {
    //call getuser
    // getUser((user) => {
    //     //call login
    //     login(user, (status) => {
    //         //call dashboard
    //         showDashboard(status, (page) => {
    //             console.log(page)
    //         }, err => {
    //             console.log(err)
    //         })
    //     }, (err) => {
    //         console.log(err)
    //     })
    // }, (err) => {
    //     console.log(err)
    // })

    // getUser()
    //     .then(user => {
    //         //login
    //         login(user)
    //             .then(status => {
    //             showDashboard(status)
    //                 .then(page => console.log(page))
    //                     .catch(err => {
    //                 console.log(err)
    //             })
    //         }).catch(err => console.log(err))
    //     })
    //     .catch(err => console.log(err))

    // getUser()
    //     .then(user => {
    //         return login(user)
    //     }).then(status => {
    //         return showDashboard(status)
    //     }).then(page => console.log(page))
    //     .catch(err => console.log(err))

    // getUser()
    //     .then(user => login(user))
    //     .then(status => showDashboard(status))
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))
    //ES6 Object destructuring syntax
    getUser()
    .then(login)
    .then(showDashboard)
    .then(page => console.log(page))
    .catch(err => console.log(err))

}
main()