import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import citiesReducer from './slices/citiesSlice'

export default configureStore({
    reducer:{
        counter: counterReducer,
        cities: citiesReducer,
    }
})