import { combineReducers } from 'redux'

const cities = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CITIES_SUCCESS':
            return action.payload.cities
        default:
            return state
    }
}
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const addReservation = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RESERVATION':
            return state.concat([action.text])
        default:
            return state
    }
}

const rootReducer = combineReducers({ cities, counter, addReservation })

export default rootReducer