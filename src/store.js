import { configureStore } from "@reduxjs/toolkit";

const initialState = { value: 0};

const counterReducer = (state = initialState, action) => {
    if(action.type === 'counter/incremented'){
        return {
            ...state,
            value: state.value + 1
        }
    }
    return state;
}


const store = configureStore({
    reducer: counterReducer
})


// action creator
const increment = () => {
    return {
        type:'counter/incremented'
    }
}
store.dispatch({type:'counter/incremented'})
store.dispatch({type:'counter/incremented'})
store.dispatch({type:'counter/incremented'})
store.dispatch(increment())

// selector
const selectCounterValue = state => state.value;
const value = selectCounterValue(store.getState());
console.log('current count',value)

console.log('Current store value',store.getState())

export default store;