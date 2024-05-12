const express = require(`express`)
const app = express()
app.use(express.json())
const borrowController = require(`../controller/borrow`)
const auth = require('../auth/auth')

app.get("/getAll", auth.authVerify, borrowController.getAll)
app.post("/find", auth.authVerify, borrowController.findBorrow)
// app.post("/add/:id", auth.authVerify, borrowController.addBorrow)
app.post("/add", auth.authVerify, borrowController.addBorrow)
app.put("/update/:id", auth.authVerify, borrowController.updateBorrow)

app.get("/:id", auth.authVerify, borrowController.getBorrowById);
module.exports = app