import React from 'react'
import {connect} from "react-redux"

import Login from "../login/Login"

export default class App extends React.Component {
    render() {
        const {dispatch, login} = this.props
        const username = login ? login.username : ""

        return (
            <div>
                <nav>
                    <p>Hello, {username}</p>
                </nav>

                <h1>Welcome to HabitTracker</h1>
                <Login dispatch={dispatch}/>

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