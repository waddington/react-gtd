// Custom wrapper for NavLink so that the active class gets applied to a wrapper li element

import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

export class CustomNavLink extends React.Component {
    render() {
        var isActive = this.context.router.route.location.pathname === this.props.to;
        var className = isActive ? 'active' : '';

        return (
            <li className={className}>
                <NavLink {...this.props}>
                    {this.props.children}
                </NavLink>
            </li>
        );
    }
}

CustomNavLink.contextTypes = {
    router: PropTypes.object
}