import {ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, EDIT_TODO} from "./actions";
import {STATUSES} from "../reducers/todos";

let nextTodoId = 0;

export const addTodo = (text, status, description) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text, status, description
    , isDeleted: false
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const editTodo = (status = STATUSES.TODO, description) => ({
    type: EDIT_TODO,
    status
    , description
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