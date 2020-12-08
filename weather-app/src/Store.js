import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import DataReducer from "./Reducer";


const Store = createStore(DataReducer, composeWithDevTools(applyMiddleware(thunk))); 

export default Store;