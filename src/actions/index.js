import {ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, EDIT_TODO} from "./actions";

let nextTodoId = 0;

export const addTodo = (text, description) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
    , description
    , isDeleted: false
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const editTodo = (id, status, description) => ({
    type: EDIT_TODO,
    id,
    status,
    description
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS',
    SHOW_TODO: 'SHOW_TODO',
    SHOW_DELETED: 'SHOW_DELETED',
};