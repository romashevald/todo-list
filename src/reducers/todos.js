import {ADD_TODO, REMOVE_TODO, EDIT_TODO} from "../actions/actions";

export const STATUSES = {
    TODO: 'todo',
    IN_PROGRESS: 'in-progress',
    DONE: 'done'
};

const todos = (state = [], action) => {
    console.log('===action.id', action.id);
    console.log('===action.id', state);
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    status: action.status,
                    description: action.description,
                    idDeleted: false
                }
            ];
        case EDIT_TODO:
            return state.map(todo =>
                (todo.id === action.id) ? {
                        ...todo
                        , status: todo.status
                        , description: action.description,
                    }
                    : todo
            );
        case REMOVE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {
                        ...todo
                        , status: todo.status
                        , isDeleted: true
                    }
                    : todo
            );
        default:
            return state
    }
};

export default todos;