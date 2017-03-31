import React from 'react';
import AsistentesFila from './AsistentesFila';
import {Link} from 'react-router';


class AsistentesLista extends React.Component {
	constructor(){
		super();
		this.state = {
			asistentes: [
				{
					id: "bliss1",
					nombre: "BlisS"
				},
				{
					id: "carlo1",
					nombre: "Carlos"
				}
			]
		};
		

	}

	


	render(){

		// let returnFila = (asistente)=> {
		// 		return <li key={asistente.id} className="list-group-item">{asistente.nombre}</li>
		// }
		// {this.state.asistentes.map(returnFila, this)}

		return(
			<div className="panel panel-default">
			  <div className="panel-heading">Panel heading</div>
			  <div className="panel-body">
			    <Link to="asistentes-form" className="btn btn-default">
			    	Agregar nuevo Asistente
			    </Link>
			  </div>
			  <ul className="list-group">
			    
			    {this.state.asistentes.map(asistente=> 
			    	<AsistentesFila key={asistente.id} asistente={asistente} />
			    )}
			  </ul>
			</div>
			);
	}
}

export default AsistentesLista;