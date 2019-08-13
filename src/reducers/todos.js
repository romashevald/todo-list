import {ADD_TODO, REMOVE_TODO, EDIT_TODO} from "../actions/actions";

export const STATUSES = {
    TODO: 'todo',
    IN_PROGRESS: 'in-progress',
    DONE: 'done'
};

const initialState = localStorage['todos'] ? JSON.parse(localStorage['todos']) : [];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const addData = [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    status: STATUSES.TODO,
                    description: action.description,
                    isDeleted: false
                }
            ];
            localStorage.setItem('todos', JSON.stringify(addData));
            return addData;
        case EDIT_TODO:
            const editData = state.map(todo =>
                (todo.id === action.id) ? {
                        ...todo
                        , status: action.status
                        , description: action.description,
                    }
                    : todo
            );
            localStorage.setItem('todos', JSON.stringify(editData));
            return editData;
        case REMOVE_TODO:
            const removeData = state.map(todo =>
                (todo.id === action.id)
                    ? {
                        ...todo
                        , isDeleted: true
                    }
                    : todo
            );
            localStorage.setItem('todos', JSON.stringify(removeData));

            return removeData;
        default:
            return state
    }
};

export default todos;