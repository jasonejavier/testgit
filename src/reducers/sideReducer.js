
const initialValue = {
    status: false
}


const sideReducer = (state = initialValue, action) => {
    switch(action.type) {
        case "SIDE_ACTION_EXPAND":
            state = {
                ...state,
                status: !state.status
            }
        default :
            state = {...state}
    }
    return state;
}

export default sideReducer;