import { createSlice } from '@reduxjs/toolkit'

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [],
    },
    reducers: {
        get: (state, action) => {
            state.value = action.payload
            // state.array = fetch('https://jsonplaceholder.typicode.com/users')
            //     .then((response) => response.json())
            //     .then((res) => console.log(res));
        }
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

export const { get } = citiesSlice.actions

export default citiesSlice.reducer