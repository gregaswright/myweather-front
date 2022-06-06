import { createSlice } from "@reduxjs/toolkit";


const userDataSlice = createSlice({
    name: 'user',
    initialState: { isUserLoggedIn: false, userData: null, userCitiesData: null},
    reducers: {
        logUserIn(state) {
            state.isUserLoggedIn = true
        },
        logUserOut(state) {
            state.isUserLoggedIn = false
        },
        currentUserData(state, action) {
            state.userData = action.payload
        },
        currentUserCitiesData(state, action) {
            state.userCitiesData = action.payload
        }
    }
});

export default userDataSlice