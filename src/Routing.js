import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Display from './Display';
import Details from './Details';

export default function Routing() {
    return (
        <Router>
            <Route path='/' component={Home} />
            <Route path='/movies' component={Display} />
            <Route path='/details/:id' component={Details} />
        </Router>
    )
}