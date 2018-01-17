import {LOGIN_REQUEST, LOGIN_SUCCESS, UPDATE_INPUT} from "../actions"
import Storage from "../util/Storage"

export const defaultState = {
    fetching: false,
    authenticated: !!Storage.get('token'),
    email: Storage.get('email'),
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case LOGIN_SUCCESS:
            Storage.set('token', action.body.token)
            Storage.set('email', state.email)

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