import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ActivityIndicator,
	Button,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Platform,
} from 'react-native';

/*
Importamos nuestros componentes personalizados
indicamos como lo vamos a llamar y de donde viene
*/
import ComponenteUno from './src/ComponenteUno';
import ComponenteDos from './src/ComponenteDos';
import ComponenteTres from './src/ComponenteTres';

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
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{/*
                Si el dispoiitivo es Android, agregamos un 
                margen de 40 puntos, de lo contrario 
                no agregamso margen
                */}
				<View
					style={{
						marginTop:
							Platform.OS === 'android'
								? 40
								: 0,
					}}
				/>
				<Text
					style={{
						alignSelf: 'center',
						fontSize: 30,
						marginBottom: 10,
					}}>
					Hola Mundo
				</Text>
				<Button title={nombre} />
				<ActivityIndicator
					size='large'
					color='#333'
				/>

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

				<ComponenteTres color='#655D8A' />

				<ComponenteTres color='#7897AB' />

				<ComponenteTres color='#D885A3' />

				<ComponenteTres color='#FDCEB9' />

				<StatusBar style='dark' />
			</ScrollView>
		</SafeAreaView>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DDD',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
