import {createStore, applyMiddleware, combineReducers} from 'redux';
import userReducer from './ducks/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';
 const combined = combineReducers({
    user: userReducer,
    course: reducer
})
export default createStore(combined, composeWithDevTools(applyMiddleware(promiseMiddleware)))