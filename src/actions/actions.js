export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text, status, description) => {
    return {type: ADD_TODO, text, status, description}
};

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (index) => {
    return {type: TOGGLE_TODO, index}
};

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const setVisibilityFilter = (filter) => {
    return {type: SET_VISIBILITY_FILTER, filter}
};