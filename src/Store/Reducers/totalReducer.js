export default function totalReducer(total = '', action){
    switch(action.type){
        case 'update total':
            return action.total;
        default: 
            return total;
    }
}