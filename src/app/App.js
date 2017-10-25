import React from 'react'
import {connect} from "react-redux"
import {AppBar} from 'material-ui'

import {LoginContainer} from "../login/Login"

export default class App extends React.Component {
    render() {
        const {dispatch, login: {username, authenticated}} = this.props
        const authIndicator = this.authIndicator({authenticated, username})

        return (
            <div>
                <AppBar
                    title="HabitTracker"
                    showMenuIconButton={false}
                    iconElementRight={authIndicator}
                    iconStyleRight={{color: 'white'}}
                />
                <LoginContainer dispatch={dispatch}/>
            </div>
        )
    }

    authIndicator({authenticated, username}) {
        if (!authenticated) {
            return null
        }

        return <p className='auth-indicator'>Hello, {username}</p>
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