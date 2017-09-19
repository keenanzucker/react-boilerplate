'use strict';

import '../css/app.less';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Welcome from 'Containers/Welcome.jsx';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='*' component={Welcome} />
            </Router>
        );
    }
}

render(<App />, document.getElementById('container'));
