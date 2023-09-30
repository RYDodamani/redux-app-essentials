// const initialState = { value: 0};

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'counter/incremented'){
//         return {
//             ...state,
//             value: state.value + 1
//         }
//     }
//     return state;
// }

// export default counterReducer


import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            // Redux toolkit allows to mutate state directly
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
});

export const selectCount = state => state.counter.value

console.log(counterSlice.actions)
async function sleepn(n){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(n)
        },n)
    })
}
// thunk action creator function - which allows to dispatch an action asynchrously
export const incrementAsync = (amount) => async (dispatch, getState) => {
    // setTimeout(()=>{
    //     dispatch(incrementByAmount(amount))
    // },5000)
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    await sleepn(10000)
    console.log('res',res);
    dispatch(incrementByAmount(amount))
}

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;