import {HABITS_REQUEST, HABITS_SUCCESS} from "../actions"

export const defaultState = {
    habits: []
}

const habitReducer = (state = defaultState, action) => {
    switch(action.type) {
        case HABITS_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case HABITS_SUCCESS:
            return {
                ...state,
                habits: action.body,
                fetching: false
            }
        default:
            return state
    }
}

export default habitReducer

