import React from 'react';
import {NavLink} from 'react-router-dom';

import {HeaderNav} from './header-nav';

export class Header extends React.Component {
    render(props) {
        return (
            <HeaderNav pages={this.props.pages}/>
        );
    }
}