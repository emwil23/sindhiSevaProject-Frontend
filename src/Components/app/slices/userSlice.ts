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
        },
        updateDownloadAccess: (state:any, action) => {
            state.userDetails.downloadsAllowed = action.payload;
        },
        updateMembers: (state:any, action:any) => {
            state.userDetails.members = action.payload;
        },
        updateLocalDownloads: (state:any, action:any) => {
            state.userDetails.localDownloadLimit = action.payload;
        }
    }
});


export const currentUser = (state:any) => state.currentUser?.userDetails;

export const currentUserRole = (state:any) => state.currentUser?.userDetails?.role;

export const { pushUserDetails, updateProfile, updateDownloadAccess, updateMembers, updateLocalDownloads } = userSlice.actions;

export default userSlice.reducer;