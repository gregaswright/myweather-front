import { createSlice } from "@reduxjs/toolkit";

const weatherDataSlice = createSlice({
    name: 'data',
    initialState: { data: null, weatherScriptMounted: false },
    reducers: {
       addWeatherData(state, action) { 
           state.data = action.payload
       }, 
       removeWeatherData(state) {
           state.data = null
       },
       mountWeatherScript(state) {
           state.weatherScriptMounted = true
       }
   }
});

export default weatherDataSlice