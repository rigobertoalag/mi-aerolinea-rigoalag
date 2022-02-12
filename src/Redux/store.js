import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import cities from './reducers'

//const composeEnhacers = window.__REDUX_DEVTOOLS_EXTEMSION_COMPOSE__ || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore( cities,composeEnhancers(
    applyMiddleware(thunk)
))

export default store