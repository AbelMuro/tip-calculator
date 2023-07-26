export default function peopleReducer(people = '', action) {
    switch(action.type){
        case 'update people':
            return action.people;
        default: 
            return people;
    }
}