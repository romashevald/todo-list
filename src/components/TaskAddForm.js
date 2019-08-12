import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions";
import {Link} from 'react-router-dom';
import {URL_LIST} from '../router/constants';

class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDescription: '',
        };
    }

    render() {
        const {taskName, taskDescription} = this.state;

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
                    <button onClick={this._onSubmit}>
                        Add Todo
                    </button>
                    <Link to={URL_LIST}>{'<<'}</Link>
                </div>
            </div>
        );
    }

    _handleChange = (e) => {
        const el = e.target;
        let {value, name} = el;
        this.setState({
            [name]: value
        })
    };

    _onSubmit = () => {
        const {taskName, taskDescription} = this.state;
        const {addTask} = this.props;
        if (taskName.trim().length === 0) {
            return;
        }
        addTask(taskName, taskDescription);

        this.setState({
            taskName: '',
            taskDescription: ''
        })
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (text, description) => dispatch(addTodo(text, description))
    }
};

export default connect(null, mapDispatchToProps)(TaskAddForm)


