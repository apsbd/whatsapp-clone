import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './pages/Login'
import ChatPage from './pages/Chat'

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login'>
                    <LoginPage></LoginPage>
                </Route>

                <ProtectedRoute
                    exact
                    path={['/', '/app', '/app/rooms', '/app/rooms/:roomId']}>
                    <ChatPage></ChatPage>
                </ProtectedRoute>
            </Switch>
        </Router>
    )
}

export default App
