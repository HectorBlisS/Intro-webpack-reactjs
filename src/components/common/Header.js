import React from 'react';
import {Link} from 'react-router';

const Header = props=> {
	return(
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">	 
		  	<Link to="/" className="btn btn-default navbar-btn">
		  		Inicio
		  	</Link>  
		  	<Link to="/about" className="btn btn-default navbar-btn">
		  		Sobre nosotros
		  	</Link>   
		  </div>
		</nav>
		);
};

export default Header;