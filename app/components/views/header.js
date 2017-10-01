import React from 'react';
import {NavLink} from 'react-router-dom';

export class Header extends React.Component {
    render(props) {
        return (
            <nav>
                {
                    this.props.pages.map(page => {
                        return <NavLink key={page.id} 
                                        to={page.link} 
                                        activeClassName="active">{page.text}</NavLink>
                    })
                }
            </nav>
        );
    }
}