

const initialState = {
    addCarData: null
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CAR_DATA':
            return {
                ...state,
                addCarData: action.payload
            };
        default:
            return state;
    }
};

export default carReducer;
