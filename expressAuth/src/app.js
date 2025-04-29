require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

//database connection
async function connectDb() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('Database Connected')
    }
    catch (err) {
        console.log(err)
    }
}
connectDb()

//middlware for authorization

const verifyToken = async (req, res, next) => {
    //get jwtToken
    const token = req.headers.authorization
    if (!token) return res.status(401).send("Request Denied")
    try {
        //verify token
        console.log(token)
        const verified = await jwt.verify(token, process.env.SECRET_KEY)
        console.log(verified)
        req.user = verified
        console.log(req.user)
        next()
    }
    catch (err) {
        res.status(401).send("Invalid Token")
    }

}

//Create User Model
const schema = mongoose.Schema({ username: String, password: String })
const User = mongoose.model("User", schema)

//Sign up process
app.post('/signup', async (req, res) => {
    const { username, password } = req.body
    try {
        //hash/encrpt the password
        const hashPassword = await bycrpt.hash(password, 10)
        //store into db
        const user = new User({ username, password: hashPassword })
        await user.save()
        res.status(201).send("User Registration Success")

    }
    catch (err) {
        console.log(err)
        res.status(500).sender("User Regisration Failed")
    }
})

//login process
app.post('/login', async (req, res) => {
    const { username, password } = req.body
    //Verify the username and password available in the database
    const user = await User.findOne({ username: username })
    if (!user) {
        return res.status(400).send("User not found")
    }
    //Compare the stored password against db
    const vaildPassword = await bycrpt.compare(password, user.password)

    if (!vaildPassword) return res.status(400).send("Password is Invalid")

    //if password and user name is correct, generate JWT Token for that user and send to
    //client

    const SECRET_KEY = process.env.SECRET_KEY || "abc22345"

    const token = jwt.sign({ username: user.username }, SECRET_KEY)
    res.status(200).send(token)

})

app.get("/api/profile", verifyToken, (req, res) => {
    console.log(req.user)
    res.send(`Welcome to ${req.user.username}`)
})



const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})