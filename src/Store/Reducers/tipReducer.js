export default function tipReducer(tip = '', action) {
    switch(action.type){
        case 'update tip':
            return action.tip;
        default: 
            return tip;
    }
}