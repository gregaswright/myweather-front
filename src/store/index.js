import { createSlice, configureStore } from '@reduxjs/toolkit';

const weatherDataSlice = createSlice({
     name: 'data',
     initialState: { data: null },
     reducers: {
        addWeatherData(state, action) {
            state.data = action.payload
            console.log("State", state.data, "Action", action.payload)
        }, 
        removeWeatherData(state) {
            state.data = null
        }
    }
});

const userDataSlice = createSlice({
    name: 'user',
    initialState: { isUserLoggedIn: false },
    reducers: {
        logUserIn(state) {
            state.isUserLoggedIn = true
        },
        logUserOut(state) {
            state.isUserLoggedIn = false
        }
    }
});

const store = configureStore({
    reducer: weatherDataSlice.reducer
});

export const weatherDataActions = weatherDataSlice.actions;
export const userDataActions = userDataSlice.actions 

export default store