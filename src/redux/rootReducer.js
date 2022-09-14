import { combineReducers } from 'redux';
import subscriberReducer from './subscribers/reducer';
import viewReducer from './views/reducer';

const rootReducer = combineReducers({
    subscribers: subscriberReducer,
    views: viewReducer
});

export default rootReducer;