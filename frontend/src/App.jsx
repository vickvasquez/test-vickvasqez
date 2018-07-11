import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import './styles/index.scss'
import Routes from './router'
import { fetchData } from './actions/actionCreator'
import configureStore from './configureStore'

const store = configureStore() // createStore(reducer, {}, applyMiddleware(thunk))

store.dispatch(fetchData)
// store.dispatch(loadMoreData)

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
)

export default hot(module)(App)
