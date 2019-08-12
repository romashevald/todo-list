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
            taskDescription: this.props.todos[this._id] ? this.props.todos[this._id].description : '',
            taskStatus: this.props.todos[this._id] ? this.props.todos[this._id].status : 'todo',
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
                        <div className="row">
                            <div className='title'>
                                <h2>Task Edit</h2>
                            </div>
                        </div>

                        <div className='title'>
                            <h3>{'Task name '} : {currentTodo.text} </h3>
                        </div>

                        <div className='title'><h3>{'Task description'}</h3></div>
                        <div className='input-add-form'>
                            <textarea value={taskDescription}
                                      name='taskDescription'
                                      onChange={this._handleChange}/>
                        </div>

                        <div className='title'><h3>{'Task status'}</h3></div>
                        <div className='input-add-form'>
                            <select value={taskStatus}
                                    name='taskStatus'
                                    onChange={this._handleChange}>
                                <option value={STATUSES.TODO}>{STATUSES.TODO}</option>
                                <option value={STATUSES.IN_PROGRESS}>{STATUSES.IN_PROGRESS}</option>
                                <option value={STATUSES.DONE}>{STATUSES.DONE}</option>
                            </select>
                        </div>

                        <button className="add-button" onClick={this._onSubmit}>
                            Edit
                        </button>

                        <button className="add-button" onClick={() => this.setState({editFinished: true})}>
                            {'<<'}
                        </button>
                    </div>
                    : <Redirect to={URL_LIST}/>
                }
            </div>
        );
    }

    _handleChange = e => {
        const el = e.target;
        const {value, name} = el;
        this.setState({[name]: value});
    };

    _onSubmit = () => {
        const {taskDescription, taskStatus} = this.state;
        const {editTodo} = this.props;
        editTodo(this._id, taskStatus, taskDescription);
        this.setState({editFinished: true});
    }

}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    editTodo: (id, taskStatus, taskDescription) => dispatch(editTodo(id, taskStatus, taskDescription))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskEdit)