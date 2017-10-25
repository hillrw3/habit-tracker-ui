import React from 'react'
import {AppBar} from 'material-ui'
import App from "./App";
import {defaultState} from "../login/loginReducer"

const defaultProps = {login: {...defaultState}}
describe('Home Page', () => {
    it('renders', () => {
        const app = shallow(<App {...defaultProps}/>)

        expect(app).not.toBeNull()
    })

    it('displays an auth indicator when user is authenticated', () => {
        let app = shallow(<App {...defaultProps}/>).instance()
        expect(app.authIndicator({authenticated: false})).toEqual(null)

        app = shallow(<App {...defaultProps}/>).instance()
        expect(app.authIndicator({authenticated: true})).not.toEqual(null)
    })
})