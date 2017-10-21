export default class Http {
    static post(route, body) {
        return fetch(`http://localhost:3000${route}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then((data) => data.json())
    }
}