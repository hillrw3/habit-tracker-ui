import React from 'react'
import {connect} from "react-redux"

import {LoginContainer} from "../login/Login"
import {HabitListContainer} from "../habit-list/HabitList"
import {AppBar} from "material-ui"

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
                {
                    authenticated ?
                        <HabitListContainer dispatch={dispatch}/> :
                        <LoginContainer dispatch={dispatch}/>

                }
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