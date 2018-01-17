import reducer, {defaultState} from './loginReducer'
import Http from "../util/Http"
import {LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions"
import Storage from "../util/Storage"

describe('loginReducer', () => {
    const state = defaultState

    describe(LOGIN_REQUEST, () => {
        it('sets fetching to true', () => {
            spyOn(Http, 'post')

            const body = {email: 'bob', password: 'password'}
            const action = {
                type: LOGIN_REQUEST,
                body
            }

            const result = reducer(state, action)

            expect(result).toEqual({...state, fetching: true})
        })
    })

    describe(LOGIN_SUCCESS, () => {
        it('stores the email and auth token', () => {
            const setItemSpy = spyOn(Storage, 'set')
            const body = {token: 'superSecure'}
            const action = {
                type: LOGIN_SUCCESS,
                body
            }

            reducer({...state, email: 'bill'}, action)

            expect(setItemSpy).toHaveBeenCalledWith('token', 'superSecure')
            expect(setItemSpy).toHaveBeenCalledWith('email', 'bill')
        })
    })
})