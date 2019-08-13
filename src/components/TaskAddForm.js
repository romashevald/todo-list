import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions";
import {URL_LIST} from '../router/constants';
import {Redirect} from 'react-router';

class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDescription: '',
            allowRedirect: false
        };
    }

    render() {
        const {taskName, taskDescription, allowRedirect} = this.state;
        if (allowRedirect) {
            return <Redirect to={URL_LIST}/>;
        }

        return (
            <div className='task-add-form'>
                <div>
                    <div className='title'><h2>Add todos</h2></div>

                    <div className='title'><h3>{'Task name'}</h3></div>
                    <div className='input-add-form'>
                        <input value={taskName}
                               name='taskName'
                               onChange={this._handleChange}/>
                    </div>

                    <div className='title'>
                        <h3>{'Task description'}</h3>
                    </div>
                    <div className='input-add-form'>
                        <textarea value={taskDescription}
                                  name='taskDescription'
                                  style={{minWidth: '50%', minHeight: '10rem'}}
                                  onChange={this._handleChange}/>
                    </div>
                    <button className="add-button" onClick={this._onSubmit}>
                        Add Todo
                    </button>
                    <button className="add-button"
                            onClick={() => this.setState({allowRedirect: true})}>{'<<'}</button>
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


