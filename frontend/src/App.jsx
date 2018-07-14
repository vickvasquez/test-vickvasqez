import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import './styles/index.scss'
import Layout from 'components/Layout'
import Inbox from './containers/Inbox'
import configureStore from './configureStore'

const store = configureStore() // createStore(reducer, {}, applyMiddleware(thunk))
const App = () => (
    <Provider store={store}>
        <Layout>
            <Inbox />
        </Layout>
    </Provider>
)

export default hot(module)(App)
