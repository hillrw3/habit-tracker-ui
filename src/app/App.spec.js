import React from 'react'
import App from "./App";
import {defaultState} from "../login/loginReducer"

const defaultProps = {login: {...defaultState}}
describe('Home Page', () => {
    it('renders', () => {
        const app = shallow(<App {...defaultProps}/>)

        expect(app).not.toBeNull()
    })

    it('displays an auth indicator when user is authenticated', () => {
        let props = {...defaultProps, login: {authenticated: false}}
        let app = shallow(<App {...props}/>)
        expect(app.find('.auth-indicator').length).toEqual(0)

        props = {...defaultProps, login: {authenticated: true}}
        app = shallow(<App {...props}/>)
        expect(app.find('.auth-indicator').length).toEqual(1)
    })
})