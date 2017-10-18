import React from 'react'

import Login from './Login'
import {loginRequest, loginSuccess} from "../actions"
import {defaultState} from "./loginReducer"
import Http from "../Http"

const fakeEvent = {
    preventDefault: () => {},
    stopPropagation: () => {},
}
const fakeHttp = {
    post: Promise.resolve()
}
const dispatchSpy = jasmine.createSpy('dispatch')

describe('Login', () => {
    beforeEach(() => {
        spyOn(Http, 'post').and.returnValue(fakeHttp.post)
    })

    it('submits user credentials based on state', () => {
        const credentials = {username: 'bob', password: 'password'}
        const componentInstance = renderComponent(credentials).instance()

        componentInstance.handleSubmit(fakeEvent)

        expect(dispatchSpy).toHaveBeenCalledWith(loginRequest(credentials))
    })

    describe('on success', () => {
        it('dispatches the success call', () => {
            const credentials = {username: 'bob', password: 'password'}
            const componentInstance = renderComponent(credentials).instance()

            componentInstance.handleSubmit(fakeEvent)

            expect(dispatchSpy).toHaveBeenCalledWith(loginSuccess())
        })
    })
})

const renderComponent = (props = {}) => {
    const defaultProps = {
        dispatch: dispatchSpy,
        ...defaultState
    }
    const mergedProps = {...defaultProps, ...props}

    return shallow(<Login {...mergedProps}/>)
}

const blah = (callback) => {

}