'use strict';

import React, {Component} from 'react';
import {URL_LIST} from "./constants";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "../components/App";

export const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path={URL_LIST} component={App} />
        </Router>
    </Provider>
);
