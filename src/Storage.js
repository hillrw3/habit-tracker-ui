export default class Storage {
    static setItem(key, value) {
        localStorage.setItem(key, value)
    }

    static getItem(key) {
        return localStorage.getItem(key)
    }
}