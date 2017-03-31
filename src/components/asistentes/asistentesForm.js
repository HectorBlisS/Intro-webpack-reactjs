import React from 'react';
import { browserHistory } from 'react-router'
import toastr from 'toastr';


class AsistentesForm extends React.Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			user: {
				id: "",
				nombre: ""
			}
		};

		this.escribiendo = this.escribiendo.bind(this);
		this.guardar = this.guardar.bind(this);
			
	}

	escribiendo(event){
		event.preventDefault();
		this.state.user.nombre = event.target.value
		this.setState({
			user: this.state.user
		});

	}

	guardar(event){
		event.preventDefault();
		// this.state.user.id = this.state.user.nombre;
		// this.state.asistentes.push(this.state.user);
		// this.setState({
		// 	asistentes: this.state.asistentes
		// });
		// this.context.router.push('/asistentes');
		browserHistory.push('/asistentes');
		toastr.success('Asistente agregado ;)')


	}

	render(){
		return(
			<div>
				<h2>Agregar asistente</h2>
				<h3>Nuevo usuario: {this.state.user.nombre}</h3>	
				<input 
					className="form-control" 
					type="text"
					name="nombre"
					onChange={this.escribiendo} />
				<button onClick={this.guardar} className="btn btn-success">Guardar</button>
			</div>
			);
	}
};

export default AsistentesForm;