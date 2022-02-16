import React, { useState } from 'react'
const { submitForm } = require("../../api/userApi.js");


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState("")

    const [token, setToken] = useState("")

    async function requestLogin(e) {
        e.preventDefault()

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
        const response = await submitForm("login", userData)
        setResponse(response)
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