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

export const UPDATE_INPUT = 'UPDATE_INPUT'
export const updateInput = (event, fieldName) => {
    return {
        type: UPDATE_INPUT,
        event,
        fieldName
    }
}