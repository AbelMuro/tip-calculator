import { combineReducers } from "redux";
import billReducer from "./billReducer.js";
import tipReducer from "./tipReducer.js";


const RootReducer = combineReducers({
    bill: billReducer,      
    tip: tipReducer,                   
});


export default RootReducer;