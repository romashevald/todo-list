import React from 'react';
import PropTypes from 'prop-types';
import {STATUSES} from "../reducers/todos";

const selectClassName = (status) => {
    switch (status) {
        case STATUSES.TODO:
            return '#FF0000';
        case STATUSES.IN_PROGRESS:
            return '#FFA500';
        case STATUSES.DONE:
            return '#44cc00';
    }
};

const Task = ({onClick, completed, text, description, status}) => (
    <li onClick={onClick}
        style={{
            color: selectClassName(status)
        }}>
        {`${text} (${description})`}
    </li>
);

Task.propTypes = {
    onClick: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Task
