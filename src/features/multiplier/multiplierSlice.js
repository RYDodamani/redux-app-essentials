const initialState = { value: 0};

const multiplierReducer = (state = initialState, action) => {
    if(action.type === 'multiplier/doubled'){
        return {
            ...state,
            value: state.value * 2
        }
    }
    return state;
}

export default multiplierReducer