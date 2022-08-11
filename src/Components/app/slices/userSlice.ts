import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: {}
};


const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        pushUserDetails: (state:any, action) => {
            state.userDetails = action.payload;
        }
    }
});


export const currentUser = (state:any) => state.user;

export const { pushUserDetails } = userSlice.actions;

export default userSlice.reducer;