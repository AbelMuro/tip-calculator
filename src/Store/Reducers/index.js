import { combineReducers } from "redux";
import billReducer from "./billReducer.js";
import tipReducer from "./tipReducer.js";
import peopleReducer from "./peopleReducer.js";
import tipAmountReducer from "./tipAmountReducer.js";
import totalReducer from './totalReducer.js';

const RootReducer = combineReducers({
    bill: billReducer,      
    tip: tipReducer,         
    people: peopleReducer,
    tipAmount: tipAmountReducer,
    total: totalReducer,
});


export default RootReducer;