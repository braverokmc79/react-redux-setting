import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from "./types"

//thunk 사용 설정으로 dispatch 함수 설정이 가능함
export const fetchComments = () => {
    return (dispatch) => {
        //동기식으로 순차적으론 진행 가능.
        dispatch(fetchCommentRequest());

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(comments =>
                dispatch(fetchCommentSuccess(comments))
            )
            .catch(error => dispatch(fetchCommentFailuer(error)));
    }
}

export const fetchCommentRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}

export const fetchCommentSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentFailuer = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}
