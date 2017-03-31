import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AsistentesLista from './components/asistentes/AsistentesLista';
import AsistentesForm from './components/asistentes/AsistentesForm';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="about" component={AboutPage} />
		<Route path="asistentes" component={AsistentesLista} />
		<Route path="asistentes-form" component={AsistentesForm} />
		<Route path="*" component={HomePage}/>
	</Route>
	);
