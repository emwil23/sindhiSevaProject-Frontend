import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import selectedRecord from "./slices/selectedRecord";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    isLoggedIn: authReducer,
    currentUser: userReducer,
    selectedRecord: selectedRecord
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store);