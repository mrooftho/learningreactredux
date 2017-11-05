import React from 'react';
import ReactDom from 'react-dom';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Main from './Main';
const app = document.getElementById('app');

ReactDom.render(
    <Router>
        <Route path='/' render={props => <Main {...props} />} />
    </Router>
,app);