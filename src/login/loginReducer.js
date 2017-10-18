import {LOGIN_REQUEST, LOGIN_SUCCESS, UPDATE_INPUT} from "../actions"
import Storage from "../Storage"

export const defaultState = {
    fetching: false,
    authenticated: !!Storage.getItem('token'),
    username: Storage.getItem('username'),
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case LOGIN_SUCCESS:
            Storage.setItem('token', action.body.token)
            Storage.setItem('username', state.username)

            return {
                ...state,
                fetching: false,
                authenticated: true,
            }
        case UPDATE_INPUT:
            const fieldValue = action.event.target.value
            return {
                ...state,
                [action.fieldName]: fieldValue
            }
        default:
            return state
    }
}

export default loginReducer