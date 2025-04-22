//async composition: output of one function will be input to another function
const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin'
    }
    //user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, 'User Not found')

    }
}
//login
const login = (user, resolve, reject) => {
    console.log('login is called')
    //biz logic
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')

    }
}
//dashboard
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    //biz logic
    if (status === 'login success') {
        setTimeout(resolve, 1000, 'Welcome to Dashboard')
    } else {
        setTimeout(reject, 1000, 'Welcome to Guest Page')

    }
}

function main() {
    //call getuser
    getUser((user) => {
        //call login
        login(user, (status) => {
            //call dashboard
            showDashboard(status, (page) => {
                console.log(page)
            }, err => {
                console.log(err)
            })
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)
    })
}
main()