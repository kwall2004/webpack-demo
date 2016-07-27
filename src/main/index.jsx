import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

const routes = {
    path: '/',
    component: require('./Main'),
    indexRoute: {
        component: require('../home/Home')
    },
    childRoutes: [
        require('../home'),
        require('../one'),
        require('../two')
    ]
};

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />, 
    document.getElementById('app')
);