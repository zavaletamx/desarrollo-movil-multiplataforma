import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

/*
StatusBar solo se implementa cuando deseamos personalizar 
la barra superior de la App (appBar)

Los estilos de ReactNative aplican prácticamente igual que en 
CSS, el 95% de la reglas aplica igual, la única diferencia en la
sintaxis, es que RN utiliza notación camello y renderiza el estilo
a partir de un objeto  de JavaScript

CSS
background-color: #000;
text-decoration: underline;

RN
backgroundColor : '#000',
textDecoration: 'underline',

Existen 3 niveles de estilos en ReactNative:

1.- Estilos por componente:
    Los estilos se declaran directamente en el componente
    y no es posible reutilizar el objeto de estilos

2.- Estilos locales:
    Los estilos se declaran en un objeto global para el componente
    estructural y es posible reutilizarse unicamente dentro de 
    dicho componente

3.- Estilos globales:
    Los estilos se declaran en un componente exportable que permite
    a su vez, se importado por cualquier otro componente y 
    pueden reutilizarse a lo largo de toda la aplicación 
*/

export default function App() {
	return (
		/*Estilos por componente*/
		<SafeAreaView style={estilos.contenedor}>
			<Text style={estilos.titulo}>Estilos</Text>

			<Text style={estilos.subtitulo}>
				Estilo con caché
			</Text>

			<View style={estilos.contenedorTarjeta}>
				<Text style={estilos.textoTarjeta}>
					Otro texto
				</Text>
			</View>

			<View style={estilos.contenedorTarjeta}>
				<Text style={estilos.textoTarjeta}>
					Otra cajita de texto
				</Text>
			</View>

			<View style={estilos.contenedorTarjeta}>
				<Text style={estilos.textoTarjeta}>
					U__U
				</Text>
			</View>

			{/*
            Si el dispositivo en Android mostramos el statusBar
            con colores oscuros, si es iOS mostramos el 
            dispositivo con colores claros
            */}
			<StatusBar
				backgroundColor='#7fd1b9'
				style={
					Platform.OS === 'android'
						? 'dark'
						: 'light'
				}
			/>
		</SafeAreaView>
	);
}

/*
1.- Creamos un objeto de estilos accesible para este componente.

2.- Deben nombrarse con una clave, pues al final, es un objeto.

3.- Creamos una clave con un objeto por cada estilo que vamos 
a crear
*/
const estilos = StyleSheet.create({
	contenedor: {
		backgroundColor: '#355070',
		paddingTop: 60,
		flex: 1,
	},
	titulo: {
		fontSize: 30,
		color: '#ECE2D0',
		paddingVertical: 10,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	subtitulo: {
		fontSize: 30,
		color: '#E1FAF9',
		paddingVertical: 10,
		fontWeight: 'normal',
		alignSelf: 'center',
	},
	contenedorTarjeta: {
		backgroundColor: '#B56576',
		marginVertical: 40,
		padding: 20,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	textoTarjeta: {
		fontSize: 30,
		paddingVertical: 10,
		fontWeight: 'normal',
		alignSelf: 'center',
	},
});
