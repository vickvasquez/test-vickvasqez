import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Inbox from './pages/Inbox'

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Inbox} />
            </Switch>
        </Layout>
    </Router>)

export default App
