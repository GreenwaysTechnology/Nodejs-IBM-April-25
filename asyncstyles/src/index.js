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

async function main() {
    // getUser()
    //     .then(login)
    //     .then(showDashboard)
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashboard(status)
        console.log(user,status,page)
    }
    catch (err) {
        console.log(err)
    }

}
main()