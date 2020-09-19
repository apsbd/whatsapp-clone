import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'

import configureStore from './redux/configureStore'

import App from './App'
import './index.css'

const store = configureStore()

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
