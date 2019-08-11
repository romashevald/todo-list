'use strict';

import React, {Component} from 'react';
import {URL_EDIT, URL_LIST} from "./constants";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "../components/App";
import TaskEdit from "../components/TaskEdit";

export const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route exact path={URL_LIST} component={App} />
            <Route path={`${URL_LIST}/:id${URL_EDIT}`} component={TaskEdit}/>
        </Router>
    </Provider>
);
