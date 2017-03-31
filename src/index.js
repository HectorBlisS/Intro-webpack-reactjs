// import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import App from './components/App';
import jquery from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/toastr/build/toastr.css';


render(
	<Router history={browserHistory} routes={routes}/>,
	document.getElementById('app')
	);