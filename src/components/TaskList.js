import React from 'react';
import PropTypes from 'prop-types';
import Task from "./Task";

const TaskList = ({todos, toggleTodo}) => {
    // console.log(log'===todos', todos);
    // console.log('===toggleTodo', toggleTodo);
    return (
        <ul>
            {todos.map(todo =>
                <Task key={todo.id}
                      {...todo}
                      onClick={() => toggleTodo(todo.id)}
                />
            )}
        </ul>
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
    toggleTodo: PropTypes.func.isRequired
};

export default TaskList