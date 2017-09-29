import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './Templates/Templates';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));