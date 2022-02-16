import { combineReducers } from 'redux'

const cities = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CITIES_SUCCESS':
            return action.payload.cities
        default:
            return state
    }
}

const addReservation = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RESERVATION':
            return state.concat([action.text])
        case 'DELETE_RESERVATION':
            return state.filter(reservationDelete => reservationDelete.arrayID !== action.id)
        case 'DELETE_ALL_RESERVATIONS':
            return state = []
        default:
            return state
    }
}

const userData = (state = [], action) =>{
    switch (action.type) {
        case 'ADD_USER_DATA':
            return state.concat([action.text])
        default:
            return state
    }
}

const activeReservationModal = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return state = true
        case 'CLOSE_MODAL':
            return state = false
        default:
            return state
    }
}

const rootReducer = combineReducers({ cities, addReservation, activeReservationModal, userData })

export default rootReducer