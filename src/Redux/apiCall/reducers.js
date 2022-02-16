import { combineReducers } from 'redux'

const cities = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CITIES_SUCCESS':
            return action.payload.cities
        default:
            return state
    }
}

const initialState = {
    reservations:[]
}

const addReservation = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RESERVATION':
            // return state.concat([action.text])
            return{
                ...state,
                reservations: [...state.reservations.concat([action.text])]
            }
            case 'DELETE_RESERVATION':
                return{
                    reservations:[
                        ...state.reservations.filter(reservation => reservation !== action.payload)
                    ]
                }
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

const rootReducer = combineReducers({ cities, addReservation, activeReservationModal })

export default rootReducer