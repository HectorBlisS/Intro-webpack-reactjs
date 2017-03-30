import React from 'react';
import HomePage from './home/HomePage';


class App extends React.Component {
	render(){
		return(
			<div>
				<p>Aqui va el header</p>
				{this.props.children}
				<HomePage />
			</div>
			);
	}
}


export default App;