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
        },
        updateProfile: (state:any, action) => {
            state.userDetails.profilePicture = action.payload;
        }
    }
});


export const currentUser = (state:any) => state.currentUser?.userDetails;

export const currentUserRole = (state:any) => state.currentUser?.userDetails?.role;

export const { pushUserDetails, updateProfile } = userSlice.actions;

export default userSlice.reducer;