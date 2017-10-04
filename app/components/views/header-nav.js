import React from 'react';
import {NavLink} from 'react-router-dom';

import {CustomNavLink} from '../utils/nav-link';

export class HeaderNav extends React.Component {
    render(props) {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        {
                            this.props.pages.map(page => {
                                return <CustomNavLink key={page.id} 
                                                      to={page.link} 
                                                      activeClassName="active">{page.text}</CustomNavLink>
                            })
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}