// import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
// import {Router, browserHistory, HashRouter} from 'react-router';
// import routes from './routes';
import App from './components/App';


render(
	<App />,
	document.getElementById('app')
	);