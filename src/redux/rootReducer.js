import { combineReducers } from 'redux';
import subscriberReducer from './subscribers/reducer';
import viewReducer from './views/reducer';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
    subscribers: subscriberReducer,
    views: viewReducer,
    comments: commentsReducer
});

export default rootReducer;