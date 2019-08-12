import React from 'react';
import PropTypes from 'prop-types';
import Task from "./Task";

const TaskList = ({todos}) => {
    return (
        <div className="task-list">
            {todos.map(todo =>
                <Task key={todo.id} {...todo}/>
            )}
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