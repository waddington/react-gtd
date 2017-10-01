import React from 'react';
import _ from 'lodash';

import {Header} from '../views/header';
import * as pagesApi from '../../api/pages-api';

export class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: []
        }
    }

    componentDidMount() {
        pagesApi.getPages().then(pages => {
            this.setState({
                pages: pages
            });
        });
    }

    render() {
        return (
            <Header pages={this.state.pages} />
        );
    }
}