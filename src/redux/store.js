import { legacy_createStore as createStore, applyMiddleware } from 'redux';
//import subscriberReducer from './subscribers/reducer';

//rootReducer combine 적용
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//1.기본
//const store = createStore(rootReducer);

//2.logger 사용시
//const store = createStore(rootReducer, applyMiddleware(logger));


//3.logger && composeWithDevTools 사용시
const middleware = [logger, thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;