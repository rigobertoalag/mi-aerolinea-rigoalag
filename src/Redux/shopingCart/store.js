import { configureStore } from '@reduxjs/toolkit'
import conterReducer from './counterSlice'

export default configureStore({
  reducer: {
      counter: conterReducer,
  },
})