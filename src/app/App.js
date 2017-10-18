import React from 'react'
import {connect} from "react-redux"

import {LoginContainer} from "../login/Login"

export default class App extends React.Component {
    render() {
        const {dispatch, login: {username, authenticated}} = this.props

        debugger
        return (
            <div>
                <nav>
                    {
                        authenticated ?
                            <p className='auth-indicator'>Hello, {username}</p> :
                            null
                    }
                </nav>

                <h1>Welcome to HabitTracker</h1>
                <LoginContainer dispatch={dispatch}/>

            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)