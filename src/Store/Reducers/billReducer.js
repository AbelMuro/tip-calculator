export default function billReducer(bill = '', action){
    switch(action.type){
        case 'update bill':
            return action.bill;
        default: 
            return bill;
    }
}