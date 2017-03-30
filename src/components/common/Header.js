import React from 'react';
import {Link} from 'react-router';

const Header = props=> {
	return(
		<nav>
			<ul>
				<li>
					<Link to="/" >
						Inicio
					</Link>
				</li>
				<li>
					<Link to="about" >
						Sobre nosotros
					</Link>
				</li>
			</ul>
		</nav>
		);
};

export default Header;