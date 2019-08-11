import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {STATUSES} from "../reducers/todos";
import {editTodo} from "../actions/actions";
import connect from "react-redux/es/connect/connect";
import {URL_EDIT, URL_LIST} from "../router/constants";
import App from "./App";
import TaskEdit from "./TaskEdit";
import {Switch, Route, Link} from 'react-router-dom'

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

class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onClick, completed, text, description, status, id, todos} = this.props;

        return (
            <div style={{border: '1px pink solid'}}>
                <div>{text}</div>
                <div>{description}</div>

                <div>
                    <div>
                        <Link to={`${URL_LIST}/${id}${URL_EDIT}`}>Edit</Link>
                    </div>
                    <div>Remove</div>
                </div>

            </div>
        );
    }
}

Task.propTypes = {
    onClick: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
};


export default connect(null, null)(Task)
