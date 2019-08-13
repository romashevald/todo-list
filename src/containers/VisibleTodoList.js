import {connect} from 'react-redux';
import {VisibilityFilters} from "../actions/actions";
import {STATUSES} from "../reducers/todos";
import TaskList from "../components/TaskList";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_DONE:
            return todos.filter(t => t.status === STATUSES.DONE && !t.isDeleted);
        case VisibilityFilters.SHOW_IN_PROGRESS:
            return todos.filter(t => t.status === STATUSES.IN_PROGRESS && !t.isDeleted);
        case VisibilityFilters.SHOW_TODO:
            return todos.filter(t => t.status === STATUSES.TODO && !t.isDeleted);
        case VisibilityFilters.SHOW_DELETED:
            return todos.filter(t => t.isDeleted);

        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
});

export default connect(mapStateToProps, null)(TaskList)
