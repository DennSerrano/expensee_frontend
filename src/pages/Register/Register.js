import React, { useState } from 'react'
const { submitUserForm } = require("../../api/postUserApi.js")

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validatePw, setValidatePw] = useState("")
    const [response, setResponse] = useState("")

    async function requestRegister(event) {
        event.preventDefault()

        if (!email.includes("@") || !email.includes(".")) {
            setResponse("Bitte gib eine gültige Email ein")
            return
        }
        if (password.length < 4 && !password.includes()) {
            setResponse("Bitte gib mindestens 4 Buchstaben ein")
            return
        }
        if (password !== password) {
            setResponse("Passwort stimmt nicht überein")
            return
        }
        const registerData = {
            email: email,
            password: password
        }
        const response = await requestRegister("register", registerData)
        setResponse(response.message)
        return;
    }

    return (
        <main className="Register">
            <h1>Expensee</h1>
            <p>Account erstellen</p>
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
            <input
                type="password"
                name="password"
                placeholder="Passwort bestätigen"
                className="inputStyle"
                onChange={(e) => setValidatePw(e.target.value)}
            />
            <button className="buttonBase">Abschicken</button>
            <article className="wavyImage" />
            <p>{response}</p>
            {/* Check ur mail */}
        </main>
    )
}

export default Register