import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import multiplierReducer from "../features/multiplier/multiplierSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        multiplier: multiplierReducer
    }
})