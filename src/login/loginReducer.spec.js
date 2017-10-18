import reducer, {defaultState} from './loginReducer'
import Http from "../Http"
import {LOGIN_REQUEST} from "../actions"

describe('loginReducer', () => {
    const state = defaultState

    describe(LOGIN_REQUEST, () => {
        it('sets fetching to true', () => {
            spyOn(Http, 'post')

            const body = {username: 'bob', password: 'password'}
            const action = {
                type: LOGIN_REQUEST,
                body: body
            }

            const result = reducer(state, action)


            expect(result).toEqual({...state, fetching: true})
        })
    })
})