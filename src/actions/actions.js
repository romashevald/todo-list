export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS',
    SHOW_TODO: 'SHOW_TODO',
    SHOW_DELETED: 'SHOW_DELETED',
};

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text, status, description) => {
    return {type: ADD_TODO, text, status, description}
};

export const EDIT_TODO = 'EDIT_TODO';
export const editTodo = (index, taskStatus, taskDescription) => {
    return {type: EDIT_TODO, index, taskStatus, taskDescription}
};

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (index) => {
    return {type: REMOVE_TODO, index}
};

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const setVisibilityFilter = (filter) => {
    return {type: SET_VISIBILITY_FILTER, filter}
};