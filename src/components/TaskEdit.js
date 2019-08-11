import React, {Component} from 'react';
import {connect} from 'react-redux';
import {STATUSES} from "../reducers/todos";
import {URL_LIST} from "../router/constants";
import {Link} from "react-router-dom";
import {editTodo} from "../actions";
import {Redirect} from "react-router";

class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this._id = Number(/\d+/.exec(props.location.pathname));
        this.state = {
            taskDescription: this.props.todos ? this.props.todos[this._id].description : JSON.parse(localStorage.getItem('todos'))[0].description,
            taskStatus: this.props.todos ? this.props.todos[this._id].status : JSON.parse(localStorage.getItem('todos'))[0].status,
            editFinished: false
        };
    }

    render() {
        const {taskDescription, taskStatus, editFinished} = this.state;
        const {todos} = this.props;

        const currentTodo = todos[this._id];
        return (
            <div className='task-edit-form'>
                {currentTodo && !editFinished ?
                    <div>
                        <div>Task Edit</div>

                        <div className='task-name'>{'taskName'}</div>
                        <div>{currentTodo.text}</div>

                        <div className='task-description'>{'task-description'}</div>
                        <div className='input-add-form'>
                            <input value={taskDescription}
                                   name='taskDescription'
                                   onChange={this._handleChange}/>
                        </div>

                        <div className='task-status'>{'task-status'}</div>
                        <div className='input-add-form'>
                            <select value={taskStatus}
                                    name='taskStatus'
                                    onChange={this._handleChange}>
                                <option value={STATUSES.TODO}>{STATUSES.TODO}</option>
                                <option value={STATUSES.IN_PROGRESS}>{STATUSES.IN_PROGRESS}</option>
                                <option value={STATUSES.DONE}>{STATUSES.DONE}</option>
                            </select>
                        </div>

                        <button type="submit" onClick={this._onSubmit}>
                            Edit
                        </button>

                        <Link to={URL_LIST}>{'<<'}</Link>
                    </div>
                    : <Redirect to={URL_LIST}/>
                }
            </div>
        );
    }

    _handleChange = e => {
        const el = e.target;
        const {value, name} = el;
        this.setState({[el.name]: value});
    };

    _onSubmit = () => {
        const {taskName, taskDescription, taskStatus} = this.state;
        const {editTodo} = this.props;
        editTodo(this._id, taskStatus, taskDescription);
        this.setState({editFinished: true});
    };

}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    editTodo: (id, taskStatus, taskDescriptio) => dispatch(editTodo(id, taskStatus, taskDescriptio))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit)