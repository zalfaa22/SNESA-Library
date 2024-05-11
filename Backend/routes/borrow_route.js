const express = require(`express`)
const app = express()
app.use(express.json())
const borrowController = require(`../controller/borrow`)
const auth = require('../auth/auth')

app.get("/getAll", auth.authVerify, borrowController.getAll)
app.post("/add", auth.authVerify, borrowController.addBorrow)
app.put("/update/:id", auth.authVerify, borrowController.updateBorrow)

module.exports = app