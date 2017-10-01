import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Layouts
import {MainLayout} from './components/layouts/main-layout';

export class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route component={MainLayout} />
                </Switch>
            </BrowserRouter>
        );
    }
}