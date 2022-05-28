import { configureStore } from '@reduxjs/toolkit';
import userDataSlice from './user';
import weatherDataSlice from './weather';
import dialogSlice from './dialog';

const store = configureStore({
    reducer: { 
        data: weatherDataSlice.reducer, 
        user: userDataSlice.reducer,
    }
});

export const weatherDataActions = weatherDataSlice.actions;
export const userDataActions = userDataSlice.actions; 
export const dialogActions = dialogSlice.actions;

export default store