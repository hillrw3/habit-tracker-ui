import React from 'react'
import {loginRequest, loginSuccess} from "../actions"
import Http from "../Http"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <label>Username<input type="text"/></label>
                <label>Password<input type="password"/></label>
                <input className="login-form__submit" type="submit" value="Submit"/>
            </form>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        e.stopPropagation()

        const {
            username,
            password,
            dispatch
        } = this.props

        const body = {username, password}

        dispatch(loginRequest(body))
        Http.post("/login", body)
            .then((data) => {
                dispatch(loginSuccess(data))
            })

    }
}