import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import todoApp from "./reducers";
import logger from 'redux-logger'
import {Root} from "./router/Root";

if (window.location.href === 'http://localhost:3000/') {
    window.location.href += 'list';
}

const store = createStore(todoApp, applyMiddleware(logger));

render(<Root store={store}/>, document.getElementById('root'));
