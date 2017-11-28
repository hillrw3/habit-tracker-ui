import Storage from './Storage'
import humps from 'humps'

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
            .then((data) => {
                return data.json().then(parsedData => {
                    return humps.camelizeKeys(parsedData)
                })
            })
    }
}