import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./todoSlice.jsx";

export default configureStore({
    reducer: {
        todo: todoReducer
    },
})
