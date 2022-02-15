import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validatePw, setValidatePw] = useState("")
    const [response, setResponse] = useState("")

    // async function submitForm() {
    //if (password !== validatePw) {
    //   setResponse("Die Passwörter müssen übereinstimmen!")
    //}
    //     const newUser = {
    //         email: email,
    //         password: password
    //     }
    //     const data = await sendeDieDatenZumBackend(newUser)
    //     setResponse(data.message)
    //     return;
    // }


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
            <p>Deine Email ist schon vergeben</p>
            {/* Check ur mail */}
        </main>
    )
}

export default Register