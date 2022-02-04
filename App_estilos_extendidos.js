import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	Platform,
	SafeAreaView,
	Text,
	View,
} from 'react-native';
import Tarjeta from './src/Tarjeta';

import estilos from './src/styles/estilos';
import colores from './src/styles/colores';

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

			<Tarjeta texto='Otro Texto' />

			<Tarjeta texto='Otra cajita de texto' />

			{/*
            Los componentes pueden contar con mas de un elemento 
            de estilos y existen dos maneras de utilizar 
            estilos extendidos:
            1.- arreglo de estilos
            2.- generar un nuevo objeto de estilos
                a partir de los componentes anteriores 
                por medio del operador spread
            */}

			{/*Estilos extendido por arreglos*/}
			<View
				style={[
					estilos.contenedorTarjeta,
					estilos.contenedorTarjeta2,
				]}>
				<Text
					style={[
						estilos.textoTarjeta,
						estilos.textoTarjeta2,
					]}>
					U__U
				</Text>
			</View>

			{/* Estilo extendido por objetos */}
			<View
				style={{
					...estilos.contenedorTarjeta,
					...estilos.contenedorTarjeta2,
				}}>
				<Text
					style={{
						...estilos.textoTarjeta,
						...estilos.textoTarjeta2,
					}}>
					Tarjeta 4
				</Text>
			</View>

			<View
				style={{
					...estilos.contenedorTarjeta,
					...estilos.contenedorTarjeta2,
					borderRadius: 60,
					borderColor: colores.bone,
					borderWidth: 2,
				}}>
				<Text
					style={[
						estilos.textoTarjeta,
						estilos.textoTarjeta2,
						{
							color: colores.middleBlueGreen,
							fontSize: 10,
						},
					]}>
					Tarjeta 5
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
