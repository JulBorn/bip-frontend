import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import loadReducer from "./loadReducer";


const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    load: loadReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))