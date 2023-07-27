export default function tipAmountReducer(tipAmount = '', action) {
    switch(action.type){
        case 'update tip amount':
            return action.tipAmount;
        default: 
            return tipAmount;
    }
}