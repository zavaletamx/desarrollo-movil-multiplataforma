import React from 'react';
import { Text, View } from 'react-native';
import ComponenteUno from './ComponenteUno';
/*
Componente desde una función flecha
*/
const ComponenteDos = (props) => {
	const arrTextosBotones = [
		'Primer Botón',
		'Segundo Botón',
		'Tercer Botón',
		'Cuarto Botón',
		'Quinto Botón',
	];

	return (
		<View>
			<Text>
				Este es mi segundo componente hecho desde
				una función flecha
			</Text>

			<ComponenteUno
				nombreUsuario={'Aldo'}
				textoPrimerBoton='Primer botón'
				textoSegundoBoton='Segundo botón'
				textoTecerBoton='Segundo botón'
				textoCuartoBoton='Segundo botón'
				textoQuintoBoton='Segundo botón'
				textoBotones={arrTextosBotones}
			/>
		</View>
	);
};

export default ComponenteDos;
