const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.get("/transaction/all", ((req, res) => {

}))

app.post("/transaction/add", ((req, res) => {

}))

app.post("/user/login", ((req, res) => {
    console.log(req.body)
    res.send({ message: "Success", status: "success" })
}))

app.post("/user/register", (req, res) => {

})

const PORT = 9000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))