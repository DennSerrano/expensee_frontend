export async function submitForm(route, userData) {
    const response = await fetch(`http://localhost:9000/user/${route}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(userData),
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}