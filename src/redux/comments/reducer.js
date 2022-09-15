import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from "./types"

const initialState = {
    items: [],
    loading: false,
    err: null
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                location: true
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                location: false
            }
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                err: action.payload,
                location: false
            }
        default: return state;
    }
}

export default commentsReducer;