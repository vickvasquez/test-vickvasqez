import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Inbox from './pages/Inbox'

const App = () => (
    <Router>
        <Switch>
            <Route path="/" component={Inbox} />
        </Switch>
    </Router>)

export default App
