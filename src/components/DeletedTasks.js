import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {URL_LIST} from '../router/constants';
import {setVisibilityFilter} from '../actions/actions';
import {VisibilityFilters} from '../actions'

const DeletedTasks = ({visibilityFilter, onClick, todos}) => {

    if (visibilityFilter !== VisibilityFilters.SHOW_DELETED) {
        return <Redirect to={URL_LIST}/>
    }
    console.log('===this.props.visibilityFilter', visibilityFilter);
    return (
        <div className="deleted-task-list">
            <div className="tasks-deleted">
                <div className='task-name'><h2>{'Is deleted'}</h2></div>
                <div className='task-delete'>
                    {todos.filter(v => v.isDeleted).map(todo => {
                            return (
                                <div className='form-task' key={`delete-${todo.id}`}>
                                    <div className='form-task-text'>{todo.text}</div>
                                    <div className='form-task-description'>{todo.description}</div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
            <div className="container-revert-buttons">
                <button className="revert-button" style={{maxHeight: '2rem'}}
                        onClick={onClick}>{'<<'}</button>
            </div>

        </div>
    );
};

const mapStateToProps = state => ({
    visibilityFilter: state.visibilityFilter,
    todos: state.todos
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletedTasks)


