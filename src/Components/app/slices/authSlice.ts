import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLoggedIn: false
}

export const authSlice = createSlice({
    name: 'isLoggedIn',
    initialState,
    reducers: {
        loggedInTrue: (state) => {
            state.userLoggedIn = true;
        },
        loggedInFalse: (state) => {
            state.userLoggedIn = false;
        }
    }
})

export const { loggedInTrue, loggedInFalse } = authSlice.actions;

export default authSlice.reducer;