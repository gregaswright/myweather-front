import { createSlice } from "@reduxjs/toolkit";


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

export default userDataSlice