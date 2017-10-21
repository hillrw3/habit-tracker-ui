export default class Http {
    static post(route, body) {
        return fetch(`${API_URL}${route}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then((data) => data.json())
    }
}