import 'react-toolbox/lib/commons.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import reducers from './main/reducers/index';

const logger = createLogger();
const middleware = applyMiddleware(thunk, promise, logger);
const store = createStore(reducers); //, middleware);

import DashboardContent from './main/containers/dashboard/content/dashboard_content/dashboardContent';
import CreateAd from './main/containers/createAd/createAd';

import App from './main/App'

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { createHistory } from 'history';

let view = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={DashboardContent}></IndexRoute>
                <Route path="createad" component={CreateAd}></Route>
            </Route>
        </Router>
    </Provider>
);


ReactDOM.render(view, document.getElementById('app'));
