import React from 'react';

const AsistentesFila = ({asistente})=> {
	return(
		 <li className="list-group-item">{asistente.nombre}</li>
		);
};

export default AsistentesFila;