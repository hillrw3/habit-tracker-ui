import Storage from './Storage'

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

    static get(route) {
        return fetch(`${API_URL}${route}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": Storage.get('token')
            }
        })
            .then((data) => data.json())
    }
}