export default function toDos(state = [], action) {
    switch(action.type) {
        case 'ADD_TO_DO':
            return [ ...state, {
                id: Math.random(),
                text: action.text,
            }]
        default:
            return state;
    } 
}