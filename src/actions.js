export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const loginRequest = (body) => {
    return {
        type: LOGIN_REQUEST,
        body
    }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const loginSuccess = (body) => {
    return {
        type: LOGIN_SUCCESS,
        body
    }
}