import React from 'react';
import ReactDOM from 'react-dom';
require('es6-promise').polyfill();

import {Router} from './router';

ReactDOM.render(<Router />, document.getElementById('app'));