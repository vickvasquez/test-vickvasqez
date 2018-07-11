import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducer'

export default (initalState) => {
    const middleware = applyMiddleware(thunk, logger)
    /* eslint-disable no-underscore-dangle */
    /* eslint-disable no-undef */
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(reducer, initalState, composeEnhancers(middleware))

    if (module.hot) {
        module.hot.accept('./reducer', () => {
            // eslint-disable-next-line global-require
            const nextRootReducer = require('./reducer')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
