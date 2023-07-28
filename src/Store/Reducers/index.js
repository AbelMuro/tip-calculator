import { combineReducers } from "redux";
import billReducer from "./billReducer.js";
import tipReducer from "./tipReducer.js";
import peopleReducer from "./peopleReducer.js";
import tipAmountReducer from "./tipAmountReducer.js";


const RootReducer = combineReducers({
    bill: billReducer,      
    tip: tipReducer,         
    people: peopleReducer,
    tipAmount: tipAmountReducer
});


export default RootReducer;