import React from 'react';
import {URL_ADD, URL_EDIT, URL_LIST} from "./constants";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "../components/App";
import TaskEdit from "../components/TaskEdit";
import {Route} from 'react-router';
import TaskAddForm from '../components/TaskAddForm';

export const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route exact path={URL_LIST} component={App}/>
            <Route path={`${URL_LIST}/:id${URL_EDIT}`} component={TaskEdit}/>
            <Route path={`${URL_LIST}${URL_ADD}`} component={TaskAddForm}/>
        </Router>
    </Provider>
);
