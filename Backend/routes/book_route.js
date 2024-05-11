const express = require(`express`)
const app = express()
app.use(express.json())
const bookController = require(`../controller/book`)
const auth = require('../auth/auth')
const upload = require(`../controller/foto`)

app.get("/getAll", auth.authVerify, bookController.getAll)
app.post("/add", auth.authVerify, bookController.addBook)
app.post("/find", auth.authVerify, bookController.findBook)
app.put("/update/:id", auth.authVerify, bookController.updateBook )
app.delete("/delete/:id", auth.authVerify, bookController.deleteBook )

module.exports = app