import React from 'react'
import {loginRequest, loginSuccess, updateInput} from "../actions"
import Http from "../Http"
import {connect} from "react-redux"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <label>Username<input type="text" onChange={this.handleChange('username')}/></label>
                <label>Password<input type="password" onChange={this.handleChange('password')} /></label>
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

    handleChange(fieldName) {
        const {dispatch} = this.props

        return (event) => {
            dispatch(updateInput(event, fieldName))
        }
    }
}

export const mapStateToProps = (state) => {
    return {
        ...state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)