import { useEffect, useState } from "react";

function Clock() {

	// Declaración del estado del componente
	const [state, setState] = useState({
		fecha: new Date(),
		edad: 0,
		nombre: 'Carlos',
		apellido: 'Cruz',
	});

	// Metodo para actualizar el estado
	const tick = () => {
		setState((prevState) => {
			return {
				...state,
				fecha: new Date(),
				edad: prevState.edad + 1,
			}
		});
	};

	// Metodo para reemplazar a component did mount y component will unmount
	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);

		return () => clearInterval(timerID);
	}, []);

	return (
		<div>
			<h2>Hora actual: {state.fecha.toLocaleTimeString()}</h2>
			<h3>{state.nombre} {state.apellido}</h3>
			<h1>Edad: {state.edad}</h1>
		</div>
	)
}

export default Clock;
