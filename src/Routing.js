import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Details from './Details';
import Display from './Display';
import MyNavbar from './MyNavbar';

export default function Routing() {
    return (
        <Router>
            <MyNavbar />
            <Route path='/movies/:query' component={Display} />
            <Route path='/details/:id' component={Details} />
        </Router>
    )
}