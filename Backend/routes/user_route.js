const express = require(`express`)
const app = express()
app.use(express.json())
const userController = require(`../controller/user`)
// const auth = require('../auth/auth')

app.post("/login", userController.login)
// app.get("/getAllUser",auth.authVerify, userController.getAllUser)
app.post("/add", userController.addUser)


module.exports = app