import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers'
import App, {AppContainer} from './app/App';

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}><MuiThemeProvider><AppContainer /></MuiThemeProvider></Provider>
    , document.getElementById('root')
);
