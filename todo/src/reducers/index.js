import { ADD_TODO } from '../actions';

const initialState = {
    ttile: 'Todo List',
    items: [
        { item: 'Walk the dog', completed: false, id: 1},
        { item: 'Washt the dishes', completed: false, id: 2 }
    ]
}

function reducer( state = initialState, action) {
    {
        switch(action.type) {
            case ADD_TODO:
                const newItem = {
                    item: action.payload,
                    id: Date.now(),
                    completed: false
                }
                return {
                    ...state,
                    items: [...state.items, newItems]
                }
                default: 
                    return state;
        }
    }
}

