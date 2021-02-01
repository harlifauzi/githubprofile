import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Search, User } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Search />
                </Route>
                <Route path="/user/:key">
                    <User />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
