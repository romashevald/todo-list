import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {STATUSES} from "../reducers/todos";
import connect from "react-redux/es/connect/connect";
import {URL_EDIT, URL_LIST} from "../router/constants";
import {Link} from 'react-router-dom'
import {removeTodo} from "../actions";

const selectClassName = (status) => {
    switch (status) {
        case STATUSES.TODO:
            return 'task-todo';
        case STATUSES.IN_PROGRESS:
            return 'task-in-progress';
        case STATUSES.DONE:
            return 'task-done';
        default:
            return '';
    }
};

class Task extends Component {

    render() {
        const {text, description, status, id} = this.props;

        return (
            <div className={`task ${selectClassName(status)}`}>
                <div>{text}</div>
                <div>{description}</div>
                <div>
                    <div>
                        <Link to={`${URL_LIST}/${id}${URL_EDIT}`}>Edit</Link>
                    </div>
                    <div>
                        <button onClick={this._handleRemove.bind(this)}>Remove</button>
                    </div>
                </div>

            </div>
        );
    }

    _handleRemove() {
        const {editTodo, id} = this.props;
        editTodo(id);
    }
}

Task.propTypes = {
    status: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    editTodo: (id) => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Task)
