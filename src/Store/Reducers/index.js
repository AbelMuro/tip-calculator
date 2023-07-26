import { combineReducers } from "redux";
import billReducer from "./billReducer.js";


const RootReducer = combineReducers({
    bill: billReducer,                         
});


export default RootReducer;