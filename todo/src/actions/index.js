export const ADD_TODO = 'ADD_TODO';

export const addTodo = item => {
    console.log(item)
    return {
        type: ADD_TODO,
        payload: item
    }
}