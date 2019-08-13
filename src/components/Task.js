import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {STATUSES} from "../reducers/todos";
import connect from "react-redux/es/connect/connect";
import {URL_EDIT, URL_LIST} from "../router/constants";
import {removeTodo} from "../actions";
import {Redirect} from 'react-router';
import {edit, remove} from '../images/index';

const selectStyle = (status) => {
    switch (status) {
        case STATUSES.TODO:
            return {
                background: ' #D9534F',
            };
        case STATUSES.IN_PROGRESS:
            return {
                background: ' #F0AD4E',
            };

        case STATUSES.DONE:
            return {
                background: ' #5CB85C',
            };

        default:
            return '';
    }
};


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allowRedirect: false
        };
    }

    render() {
        const {text, description, status, id} = this.props;
        const {allowRedirect} = this.state;
        if (allowRedirect) return <Redirect to={`${URL_LIST}/${id}${URL_EDIT}`}/>;

        return (
            <div className='form-task' style={selectStyle(status)}>
                <div className='form-task-text'>{text}</div>

                <div className='form-task-description'>{description}</div>

                <div className='form-task-buttons'>
                    <div>
                        <button className='form-edit'
                                onClick={() => this.setState({allowRedirect: true})}>{edit}</button>
                    </div>
                    <div>
                        <button className='form-remove'
                                onClick={this._handleRemove.bind(this)}>
                            {remove}
                        </button>
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
