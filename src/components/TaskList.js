import React from 'react';
import PropTypes from 'prop-types';
import Task from "./Task";
import {STATUSES} from "../reducers/todos";
import {Redirect} from 'react-router';
import {URL_DELETED, URL_LIST} from '../router/constants';
import {VisibilityFilters} from '../actions/actions';

export const filterTodos = (todos, status) => todos.filter(v => v.status === status && !v.isDeleted);

const TaskList = ({todos, visibilityFilter}) => {

    if (visibilityFilter === VisibilityFilters.SHOW_DELETED) {
        return <Redirect to={`${URL_LIST}${URL_DELETED}`}/>
    }

    return (
        <div className="task-list">
            <div className="task">
                <div className='task-name'>{'Todo'}</div>
                <div className='task-todo'>
                    {filterTodos(todos, STATUSES.TODO).map(todo =>
                        <Task key={todo.id} {...todo}/>
                    )}
                </div>
            </div>
            <div children="task">
                <div className='task-name'>{'In progress'}</div>
                <div className='task-todo'>
                    {filterTodos(todos, STATUSES.IN_PROGRESS).map(todo =>
                        <Task key={todo.id} {...todo}/>
                    )}
                </div>
            </div>
            <div children="task">
                <div className='task-name'>{'Done'}</div>
                <div className='task-todo'>
                    {filterTodos(todos, STATUSES.DONE).map(todo =>
                        <Task key={todo.id} {...todo}/>
                    )}
                </div>
            </div>
        </div>
    );
};

TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isDeleted: PropTypes.bool.isRequired
    }).isRequired).isRequired,
};

export default TaskList