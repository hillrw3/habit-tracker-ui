import { combineReducers } from 'redux'

import login from './login/loginReducer'
import habits from './habit-list/habitReducer'

const reducers = combineReducers({
    login,
    habits
})

export default reducers