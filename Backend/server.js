const express = require("express")
const app = express()
const PORT = 8080
const cors = require(`cors`)
const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname))

const userRoute = require("./routes/user_route")
const bookRoute = require("./routes/book_route")
const borrowRoute = require("./routes/borrow_route")

app.use("/user", userRoute)
app.use("/book", bookRoute)
app.use("/borrow", borrowRoute)


app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})
    