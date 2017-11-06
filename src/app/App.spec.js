import React from 'react'

import App from "./App"
import {defaultState} from "../login/loginReducer"

const defaultProps = {login: {...defaultState}, dispatch: jasmine.createSpy()}
describe('Home Page', () => {
    it('renders', () => {
        const app = shallow(<App {...defaultProps}/>)

        expect(app).not.toBeNull()
    })

    describe('when there is an authenticated user', () => {
        it('displays a friendly little greeting', () => {
            let app = shallow(<App {...defaultProps}/>).instance()
            expect(app.authIndicator({authenticated: false})).toEqual(null)

            app = shallow(<App {...defaultProps}/>).instance()
            expect(app.authIndicator({authenticated: true})).not.toEqual(null)
        })
    })
})