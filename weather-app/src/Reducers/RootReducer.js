
import {combineReducers} from "redux";
import WeatherReducer from "./WeatherReducer";


const RootReducer = combineReducers({ WeatherReducer});

export default RootReducer;