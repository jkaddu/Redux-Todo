import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
    title: 'Todo List',
    items: [
        { todoItem: 'Walk the dog', completed: false, id: 1},
        { todoItem: 'Washt the dishes', completed: false, id: 2 }
    ]
}

function reducer( state = initialState, action) {
        switch(action.type) {
            case ADD_TODO:
                const newtodoItem = {
                    todoItem: action.payload,
                    id: Date.now(),
                    completed: false
                }
                return {
                    ...state,
                    todoItems: [...state.todoItems, newtodoItem]
                }
            case TOGGLE_COMPLETED:
                return{
                    ...state,
                    todoItems: state.todoItems.map(item =>
                        item.id === action.payload
                        ? { ...item, completed: !item.completed }
                        : item
                    )
                }
                default: 
                    return state;
        }
}

export default reducer;
