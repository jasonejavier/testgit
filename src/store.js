import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import sideReducer from './reducers/sideReducer';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
    sideReducer
})

export default createStore(reducer,
    {},
    composeEnhancers(
        applyMiddleware(logger)
    )
);