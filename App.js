import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ActivityIndicator,
	Button,
	StyleSheet,
	Text,
	View,
} from 'react-native';

/*
Los componentes en ReactNative permiten 
utilizar un conjunto de librerías para reutilizarse

Los componentes de ReactNative se dividen en 2:
- Componentes visuales
- Componentes de disposición

Los componentes de ReactNative se construyen 
a partir de la librería de React y la sintaxis 
se escribe en JSX, el motor de Babel permite 
la transformación de los componentes en tiempo
de ejecución.

Los componentes de ReactNative se pueden construir de 
las siguientes maneras: 
- Componente a partir de una Función
- Componente a partir de una Función Flecha
- Componente a partir de una Clase 

Los componentes disponen de atributos (props) 
que permiten personalizar el contenido, forma o
comportamiento de cada componente

El valor de las props de React puede ser de 
cualquier tipo soportado por Javascript, una 
prop puedes conter:
String, entero, funcion, variable, objeto, 
ref a una clase, arreglo, etc...

Si el valor es String, se indica con apostrofes (comillas simples)

Si el valor es de cualquier otro tipo se indica con llaves
*/

export default function App() {
	let nombre = 'Raul Zavaleta';

	const arrTextosBotones = [
		'Primer Botón',
		'Segundo Botón',
		'Tercer Botón',
		'Cuarto Botón',
		'Quinto Botón',
	];

	/*
    Comments afuera de return 
    */

	return (
		<View style={styles.container}>
			<Text>Hola Mundo</Text>
			<Button title={nombre} />
			<ActivityIndicator size='large' color='#333' />

			{/* Comentario dentro de Return */}

			<ComponenteUno
				nombreUsuario={nombre}
				textoPrimerBoton='Primer botón'
				textoSegundoBoton='Segundo botón'
				textoTecerBoton='Segundo botón'
				textoCuartoBoton='Segundo botón'
				textoQuintoBoton='Segundo botón'
				textoBotones={arrTextosBotones}
			/>

			<ComponenteDos />

			<StatusBar style='dark' />
		</View>
	);
}

/*
React permite crear componentes personalizados 
anidando a su vez otros componentes, la forma para 
crear componentes:
1.- funciones tradiciones
2.- funciones flecha
3.- clases

La única regla para generar un componente es retornar 
un elemento, ya sea visual o de disposición

Los componentes disponen de un parámetro global llamado 
props donde residen todos los elementos de tipo prop
que se asignen a un componente
*/

function ComponenteUno(props) {
	console.log(props);

	return (
		<View
			style={{
				margin: 20,
				padding: 20,
				backgroundColor: '#0FF000',
			}}>
			<Text>
				Hola {props.nombreUsuario} desde mi
				componente creado con una función
				tradicional
			</Text>

			<Button title={props.textoBotones[0]} />
			<Button title={props.textoBotones[1]} />
			<Button title={props.textoBotones[2]} />
			<Button title={props.textoBotones[3]} />
			<Button title={props.textoBotones[4]} />
		</View>
	);
}

/*
Componente desde una función flecha
*/
const ComponenteDos = () => {
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DDD',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
