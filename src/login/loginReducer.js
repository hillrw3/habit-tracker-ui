import {LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions"

export const defaultState = {
    fetching: false
}

const loginReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                username: action.body.username
            }
        default:
            return state
    }
}

export default loginReducer