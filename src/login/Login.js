import React from 'react'
import {connect} from "react-redux"
import {Card, CardTitle, CardText, TextField, RaisedButton} from 'material-ui'

import {loginRequest, loginSuccess, updateInput} from "../actions"
import Http from "../util/Http"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return (
            <Card>
                <CardTitle title="Login"/>
                <CardText>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <TextField floatingLabelText="email" onChange={this.handleChange('email')}/>
                        <TextField type="password" floatingLabelText="Password" onChange={this.handleChange('password')}/>
                        <br/>
                        <RaisedButton type="submit" className="login-form__submit" label="Submit" primary={true} />
                    </form>
                </CardText>
            </Card>
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        e.stopPropagation()

        const {
            email,
            password,
            dispatch
        } = this.props

        const body = {email, password}

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