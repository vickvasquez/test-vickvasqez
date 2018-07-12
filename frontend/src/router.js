import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Inbox from './pages/Inbox'

const NotFound = () => <h2> Not Found</h2>

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Inbox} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </Router>)

export default App
