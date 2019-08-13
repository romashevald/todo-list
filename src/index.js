import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import todoApp from "./reducers";
import logger from 'redux-logger'
import {Root} from "./router/Root";

const store = createStore(todoApp, applyMiddleware(logger));


render(<Root store={store}/>, document.getElementById('root'));
