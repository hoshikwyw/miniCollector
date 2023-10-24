import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        current: null
    },
    reducers: {
        setCurrentWeather(state, action) {
            state.current = action.payload
        }
    }
})

export const {setCurrentWeather} = weatherSlice.actions
export const weatherReducer = weatherSlice.reducer