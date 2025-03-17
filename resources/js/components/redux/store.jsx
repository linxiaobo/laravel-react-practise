import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine
import todoReducer from "./todoSlice";

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, todoReducer);
export const store = configureStore({
    reducer: {
        todo: persistedReducer
    },
})
export const persistor = persistStore(store);
