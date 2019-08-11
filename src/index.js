'use strict';

import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import todoApp from "./reducers";
import logger from 'redux-logger'
import {Root} from "./router/Root";

const store = createStore(todoApp, applyMiddleware(logger));

console.log(store);

render(<Root store={store}/>,
    document.getElementById('root')
);
