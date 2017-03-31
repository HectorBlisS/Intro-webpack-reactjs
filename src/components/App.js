import React from 'react';
import HomePage from './home/HomePage';
import Header from './common/Header';


class App extends React.Component {
	render(){
		return(
			<div className="container-fluid">
				<Header />
				{this.props.children}
			</div>
			);
	}
}


export default App;