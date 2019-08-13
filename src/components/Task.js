import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {STATUSES} from "../reducers/todos";
import connect from "react-redux/es/connect/connect";
import {URL_EDIT, URL_LIST} from "../router/constants";
import {removeTodo} from "../actions";
import {Redirect} from 'react-router';

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

const edit = <svg xmlns="http://www.w3.org/2000/svg"
                  x="0px" y="0px"
                  viewBox="0 0 55.25 55.25">
    <path d="M52.618,2.631c-3.51-3.508-9.219-3.508-12.729,0L3.827,38.693C3.81,38.71,3.8,38.731,3.785,38.749
	c-0.021,0.024-0.039,0.05-0.058,0.076c-0.053,0.074-0.094,0.153-0.125,0.239c-0.009,0.026-0.022,0.049-0.029,0.075
	c-0.003,0.01-0.009,0.02-0.012,0.03l-3.535,14.85c-0.016,0.067-0.02,0.135-0.022,0.202C0.004,54.234,0,54.246,0,54.259
	c0.001,0.114,0.026,0.225,0.065,0.332c0.009,0.025,0.019,0.047,0.03,0.071c0.049,0.107,0.11,0.21,0.196,0.296
	c0.095,0.095,0.207,0.168,0.328,0.218c0.121,0.05,0.25,0.075,0.379,0.075c0.077,0,0.155-0.009,0.231-0.027l14.85-3.535
	c0.027-0.006,0.051-0.021,0.077-0.03c0.034-0.011,0.066-0.024,0.099-0.039c0.072-0.033,0.139-0.074,0.201-0.123
	c0.024-0.019,0.049-0.033,0.072-0.054c0.008-0.008,0.018-0.012,0.026-0.02l36.063-36.063C56.127,11.85,56.127,6.14,52.618,2.631z
	 M51.204,4.045c2.488,2.489,2.7,6.397,0.65,9.137l-9.787-9.787C44.808,1.345,48.716,1.557,51.204,4.045z M46.254,18.895l-9.9-9.9
	l1.414-1.414l9.9,9.9L46.254,18.895z M4.961,50.288c-0.391-0.391-1.023-0.391-1.414,0L2.79,51.045l2.554-10.728l4.422-0.491
	l-0.569,5.122c-0.004,0.038,0.01,0.073,0.01,0.11c0,0.038-0.014,0.072-0.01,0.11c0.004,0.033,0.021,0.06,0.028,0.092
	c0.012,0.058,0.029,0.111,0.05,0.165c0.026,0.065,0.057,0.124,0.095,0.181c0.031,0.046,0.062,0.087,0.1,0.127
	c0.048,0.051,0.1,0.094,0.157,0.134c0.045,0.031,0.088,0.06,0.138,0.084C9.831,45.982,9.9,46,9.972,46.017
	c0.038,0.009,0.069,0.03,0.108,0.035c0.036,0.004,0.072,0.006,0.109,0.006c0,0,0.001,0,0.001,0c0,0,0.001,0,0.001,0h0.001
	c0,0,0.001,0,0.001,0c0.036,0,0.073-0.002,0.109-0.006l5.122-0.569l-0.491,4.422L4.204,52.459l0.757-0.757
	C5.351,51.312,5.351,50.679,4.961,50.288z M17.511,44.809L39.889,22.43c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0
	L16.097,43.395l-4.773,0.53l0.53-4.773l22.38-22.378c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L10.44,37.738
	l-3.183,0.354L34.94,10.409l9.9,9.9L17.157,47.992L17.511,44.809z M49.082,16.067l-9.9-9.9l1.415-1.415l9.9,9.9L49.082,16.067z"/>
</svg>;

const remove = <svg version="1.0"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.9,15.5l-1.4,1.4L12,13.4l-3.5,3.5
       l-1.4-1.4l3.5-3.5L7.1,8.5l1.4-1.4l3.5,3.5l3.5-3.5l1.4,1.4L13.4,12L16.9,15.5z"/>
</svg>;

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
