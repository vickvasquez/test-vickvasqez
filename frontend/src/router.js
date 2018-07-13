import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import Inbox from './pages/Inbox'
import Details from './pages/Details'

const NotFound = () => <h2> Not Found</h2>

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={Inbox} />
                <Route exact path="/inbox/:id" component={Details} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </Router>)

export default App
