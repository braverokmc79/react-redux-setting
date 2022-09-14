import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types';

const initialState = {
    count: 370
}
const subscriberReducer = (state = initialState, action) => {
    console.log("2. action.type :", action.type);
    switch (action.type) {

        case ADD_SUBSCRIBER:
            return {
                ...state,
                count: state.count + 1
            }
        case REMOVE_SUBSCRIBER:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state;
    }
}

export default subscriberReducer;



