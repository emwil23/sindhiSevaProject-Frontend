import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import selectedRecord from "./slices/selectedRecord";

export const store = configureStore({
    reducer: {
        isLoggedIn: authReducer,
        currentUser: userReducer,
        selectedRecord: selectedRecord
    }
})