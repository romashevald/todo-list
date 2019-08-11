import React, {Component} from 'react';
import {connect} from 'react-redux';
import {STATUSES} from "../reducers/todos";
import {addTodo} from "../actions";

class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDescription: '',
            taskStatus: STATUSES.TODO
        };
    }

    render() {
        const {taskName, taskDescription, taskStatus} = this.state;

        let input;
        return (
            <div className='task-add-form'>
                <div>
                    <div className='task-name'>{'taskName'}</div>
                    <div className='input-add-form'>
                        <input value={taskName}
                               name='taskName'
                               onChange={this._handleChange}/>
                    </div>

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
                        Add Todo
                    </button>
                </div>
            </div>
        );
    }

    _handleChange = e => {
        const el = e.target;
        let {value, name} = el;
        this.setState({
            [name]: value
        })
    };

    _onSubmit = () => {
        const {taskName, taskDescription, taskStatus} = this.state;
        const {addTask} = this.props;
        if (taskName.trim().length === 0) {
            return;
        }
        addTask(taskName, taskStatus, taskDescription);
    };
}

// const mapStateToProps = state => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
// });

const mapDispatchToProps = dispatch => {
    return {
        addTask: (text, status, description) => dispatch(addTodo(text, status, description))
    }
};

export default connect(null, mapDispatchToProps)(TaskAddForm)


