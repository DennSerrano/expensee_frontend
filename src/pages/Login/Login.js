import React, { useState } from 'react'
import { submitUserForm } from '../../api/postUserApi.js'
const { submitForm } = require("../../api/postUserApi.js")


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("")

    const [token, setToken] = useState("")

    async function requestLogin(event) {
        event.preventDefault()

        if (!email.includes("@")) {
            setResponse("Die Email muss vollständig sein")
            return;
        }
        if (password === "") {
            setResponse("Bitte gültiges Password eingeben")
            return;
        }
        const userData = {
            email: email,
            password: password
        }
        const response = await submitUserForm("login", userData)

        // app.post("/user/login", ((req, res) => {
        //    console.log(req.body)
        //   res.send({ message: "Success", status: "success" })
        //}))


        setResponse(response.message)
        return;


    }

    return (
        <main className="Login">
            <h1>Expensee</h1>
            <p>Login mit Email</p>
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="inputStyle"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="Passwort"
                className="inputStyle"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="buttonBase"
                onClick={requestLogin}>
                Abschicken
            </button>
            <p>{response}  </p>
            <article className="wavyImage" />
        </main>
    )
}

export default Login